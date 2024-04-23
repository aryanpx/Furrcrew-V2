import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ServiceTabsComponent } from '../service-tabs/service-tabs.component';
import { VerticalEventsComponent } from '../vertical-events/vertical-events.component';
import { BlogsListComponent } from '../blogs-list/blogs-list.component';
import { ScrollAnimationService } from '../../services/scroll-animation.service';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [ServiceTabsComponent, VerticalEventsComponent, BlogsListComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent implements OnInit {
  imageSrc!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private scrollAnimationService: ScrollAnimationService) {}

  ngOnInit(): void {
    // Assuming your SVG file is located in the assets folder
    const svgPath = 'assets/images/phoneImage.svg';
    this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(svgPath);
    this.scrollAnimationService.initScrollAnimation();
  }
}
