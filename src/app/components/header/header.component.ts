import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { DOCUMENT } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sidebarOpen: boolean = false;
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar(): void {
    console.log('close sidebar called');
    this.sidebarOpen = false;
  }
  theme: 'light' | 'dark' = this.themeService.isDarkTheme ? 'dark' : 'light';
  dropdownOpen: boolean = false;
  header!: HTMLElement;
  // iconSrc: string = 'path/to/default/icon'; // Add this line
  constructor(private elementRef: ElementRef, public themeService: ThemeService, @Inject(DOCUMENT) private document: Document) {
    console.log('🚀 ~ HeaderComponent ~  this.themeService.isDarkTheme :', this.themeService.isDarkTheme);
    const localStorage = document.defaultView?.localStorage;
    console.log('🚀 ~ HeaderComponent ~ constructor ~ localStorage:', localStorage);
    if (localStorage !== undefined) {
      const preferredTheme = localStorage.getItem('theme');
      console.log('🚀 ~ HeaderComponent ~ constructor ~ preferredTheme:', preferredTheme);
      if (preferredTheme) {
        this.theme = preferredTheme as 'dark' | 'light';
        console.log('if condition', this.theme);
        document.body.classList.add(this.theme);
      }
    } else {
      console.log('else condition');

      this.theme = this.themeService.isDarkTheme ? 'dark' : 'light';
      document.body.classList.add(this.theme);
    }
  }
  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark', this.theme === 'dark');
    localStorage.setItem('theme', this.theme);
    this.themeService.isDarkTheme = this.theme === 'dark';
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
