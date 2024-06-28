import { DOCUMENT } from '@angular/common';
import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isDarkTheme: boolean = false; // Assuming default theme is light

  constructor(@Inject(DOCUMENT) private document: Document) {
    // Detect system theme
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('theme') === null) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        this.isDarkTheme = prefersDark.matches;
        // console.log('🚀 ~ ThemeService ~ constructor ~ this.isDarkTheme:', this.isDarkTheme);  //! true on my device
        document.body.classList.add(this.isDarkTheme ? 'dark' : 'light');
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
        // console.log('if condition running', this.isDarkTheme);
      } else {
        // console.log("🚀 ~ ThemeService ~ constructor ~ localStorage.getItem('theme'):", localStorage.getItem('theme'));
        // console.log('elese condition');
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
      }
    }
  }
}
