import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-service-tabs',
  standalone: true,
  imports: [],
  templateUrl: './service-tabs.component.html',
  styleUrl: './service-tabs.component.css',
})
export class ServiceTabsComponent implements OnInit {
  vetImg!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Assuming your SVG file is located in the assets folder
    this.vetImg = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/vetImg.png');
  }
}
