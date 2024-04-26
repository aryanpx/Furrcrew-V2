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
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      this.isDarkTheme = prefersDark.matches;
      prefersDark.addListener((mediaQuery) => {
        this.isDarkTheme = mediaQuery.matches;
      });
    }
  }
}
