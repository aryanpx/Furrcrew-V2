import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  theme: 'light' | 'dark' = 'light';
  dropdownOpen: boolean = false;
  header!: HTMLElement;
  // iconSrc: string = 'path/to/default/icon'; // Add this line
  constructor(private elementRef: ElementRef, public themeService: ThemeService, @Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;
    if (localStorage !== undefined) {
      const preferredTheme = localStorage.getItem('theme');
      if (preferredTheme) {
        this.theme = preferredTheme as 'light' | 'dark';
        document.body.classList.add(this.theme);
      }
    }
  }
  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark', this.theme === 'dark');
    localStorage.setItem('theme', this.theme);
  }
  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
  ngOnInit() {
    this.header = this.elementRef.nativeElement.querySelector('#myHeader');
  }
  // Define toggleTheme function to toggle between light and dark mode

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
