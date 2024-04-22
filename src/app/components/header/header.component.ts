import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;
  header!: HTMLElement;
  // iconSrc: string = 'path/to/default/icon'; // Add this line
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.header = this.elementRef.nativeElement.querySelector('#myHeader');
  }
  // Define toggleTheme function to toggle between light and dark mode
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }
  sticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const stickyOffset = this.header.offsetTop;

    if (window.scrollY > stickyOffset) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
}
