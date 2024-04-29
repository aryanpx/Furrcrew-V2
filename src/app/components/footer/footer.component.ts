import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { BlogsComponent } from '../blogs/blogs.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [BlogsComponent, RouterOutlet, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  footer!: HTMLElement;
  theme!: string | null;

  constructor(private renderer: Renderer2, private elementRef: ElementRef, public themeService: ThemeService, private router: Router) {
    console.log('🚀 ~ FooterComponent ~ themeService:', themeService.isDarkTheme);
  }
  goToBlogs() {
    this.router.navigate(['/blogs']);
  }
  ngOnInit(): void {
    this.footer = this.elementRef.nativeElement.querySelector('#stickyFooter');
  }
  sticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const stickyOffset = this.footer.offsetTop;

    if (window.scrollY < stickyOffset) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
