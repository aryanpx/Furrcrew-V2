import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footer!: HTMLElement;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.footer = this.elementRef.nativeElement.querySelector('#stickyFooter');
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const footerElement = this.elementRef.nativeElement.querySelector('#stickyFooter');
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    const footerHeight = footerElement.offsetHeight;
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition <= documentHeight - footerHeight) {
      this.renderer.addClass(footerElement, 'sticky');
    } else {
      this.renderer.removeClass(footerElement, 'sticky');
    }
  }
}
