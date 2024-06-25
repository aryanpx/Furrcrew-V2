import { Component, ElementRef, HostBinding, HostListener, Inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { SideBarComponent } from '../side-bar/side-bar.component';
// import { ClickOutsideDirective } from './clickOutside';
import { CommonService } from '../../services/common.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  animations: [
    trigger('changeState', [
      state(
        'light',
        style({
          transform: 'rotate(0)',
        })
      ),
      state(
        'dark',
        style({
          transform: 'rotate(-180deg)',
        })
      ),
      transition('light <=> dark', animate('100ms ease-in-out')),
    ]),
  ],
  imports: [SideBarComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  sidebarOpen: boolean = false;
  theme: 'light' | 'dark' = this.themeService.isDarkTheme ? 'dark' : 'light';
  header!: HTMLElement;
  // iconSrc: string = 'path/to/default/icon'; // Add this line
  constructor(
    private elementRef: ElementRef,
    public themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private commonService: CommonService
  ) {
    // console.log('🚀 ~ HeaderComponent ~ theme:', this.theme);
    const localStorage = document.defaultView?.localStorage;
    if (localStorage !== undefined) {
      const preferredTheme = localStorage.getItem('theme');
      if (preferredTheme) {
        this.theme = preferredTheme as 'dark' | 'light';
        document.body.classList.add(this.theme);
      }
    } else {
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
  ngOnInit() {
    this.header = this.elementRef.nativeElement.querySelector('#myHeader');
    this.commonService._sidebarOpen.subscribe((isOpen: boolean) => {
      this.sidebarOpen = isOpen;
    });
  }
  toggleSidebar(): void {
    this.commonService.setSidebar(!this.sidebarOpen); // Toggle the sidebar state
  }
  closeSidebar() {
    this.commonService.setSidebar(false);
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
