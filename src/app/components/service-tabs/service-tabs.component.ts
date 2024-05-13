import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import $ from 'jquery';
@Component({
  selector: 'app-service-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-tabs.component.html',
  styleUrl: './service-tabs.component.css',
})
export class ServiceTabsComponent implements OnInit {
  vetImg!: SafeResourceUrl;
  activeTab: number = 0;
  progressWidth: number = 0;
  progressInterval: any = null;
  @ViewChild('tabContainer') tabContainerRef!: ElementRef;
  constructor(
    private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) public document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // this.setActiveTab(0);
  }

  initSliderAnimation(): void {
    if (typeof window !== 'undefined') {
      $(window).scroll(() => {
        const tabContainer = $('.tab-container');
        const tabContainerHeight = tabContainer?.outerHeight();
        console.log('🚀 ~ ServiceTabsComponent ~ $ ~ tabContainerHeight:', tabContainerHeight);
        const tabContainerOffset = tabContainer?.offset();
        console.log('🚀 ~ ServiceTabsComponent ~ $ ~ tabContainerOffset:', tabContainerOffset);
        const windowHeight = window.innerHeight;
        console.log('🚀 ~ ServiceTabsComponent ~ $ ~ windowHeight:', windowHeight);
        if (tabContainerOffset && tabContainerHeight) {
          if (tabContainerOffset.top >= 0 && tabContainerOffset.top + tabContainerHeight <= windowHeight) {
            console.log('starting the progress', tabContainerOffset.top, tabContainerHeight);
            if (!this.progressInterval) {
              this.startProgress();
            }
          } else {
            clearInterval(this.progressInterval);
            this.progressInterval = null;
          }
        }
      });
    }
  }

  ngOnInit(): void {
    this.vetImg = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/vetImg.png');
    if (isPlatformBrowser(this.platformId)) {
      // Check if platform is browser
      // this.initSliderAnimation();
      this.setActiveTab(0);
    }
  }
  ngAfterViewInit(): void {
    // this.initSliderAnimation();
    // this.startProgress();
  }
  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
    // clearInterval(this.progressInterval); // Stop the progress bar animation on manual tab selection
    this.progressWidth = 0; // Reset the progress bar width
    clearInterval(this.progressInterval); // Stop the progress bar animation on manual tab selection
    this.startProgress();
  }
  autoSwitchTabs(): void {
    if (this.activeTab === 3) {
      this.setActiveTab(0);
    } else {
      this.setActiveTab(this.activeTab + 1);
    }
  }
  startProgress(): void {
    this.progressInterval = setInterval(() => {
      if (this.progressWidth < 100) {
        this.progressWidth++;
      } else {
        clearInterval(this.progressInterval);
        this.autoSwitchTabs();
      }
      console.log('🚀 ~ ServiceTabsComponent ~ this.progressInterval=setInterval ~ (this.progressWidth:', this.progressWidth);
    }, 110); // Adjust the interval for the progress bar animation
  }
}
