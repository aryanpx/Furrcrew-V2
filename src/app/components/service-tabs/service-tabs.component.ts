import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  setActiveTab(tabIndex: number): void {
    this.activeTab = tabIndex;
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Assuming your SVG file is located in the assets folder
    this.vetImg = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/vetImg.png');
  }
}
