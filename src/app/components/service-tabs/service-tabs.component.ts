import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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

  constructor(private sanitizer: DomSanitizer, @Inject(DOCUMENT) public document: Document) {}

  ngOnInit(): void {
    setTimeout(() => {
      const tabs = this.document.querySelectorAll('.flex.flex-col.flex-1.cursor-pointer');
      const slider = this.document.createElement('div');
      slider.classList.add('tab-slider');
      tabs[0].appendChild(slider);

      let activeTabIndex = 0;

      function setActiveTab(index: any) {
        if (index === activeTabIndex) return;

        const prevTab = tabs[activeTabIndex];
        const nextTab = tabs[index];
        const sliderWidth = nextTab.getBoundingClientRect().width;
        const nextTabOffsetLeft = Array.from(tabs)
          .slice(0, index)
          .reduce((acc, tab) => acc + tab.getBoundingClientRect().width, 0);

        slider.style.width = sliderWidth + 'px';
        slider.style.transform = `translateX(${nextTabOffsetLeft}px)`;

        prevTab.classList.remove('active-tab');
        nextTab.classList.add('active-tab');

        activeTabIndex = index;
      }

      tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
          setActiveTab(index);
        });
      });
    }, 100); // Adjust the delay if necessary

    // Assuming your SVG file is located in the assets folder
    this.vetImg = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/vetImg.png');
  }
  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }
}
