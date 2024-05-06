import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

@Component({
  selector: 'app-scrollable-div',
  standalone: true,
  imports: [],
  templateUrl: './scrollable-div.component.html',
  styleUrls: ['./scrollable-div.component.css'],
})
export class ScrollableDivComponent implements OnInit {
  imageSrc!: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer, private scrollAnimationService: ScrollAnimationService) {}
  ngOnInit(): void {
    // Assuming your SVG file is located in the assets folder
    const svgPath = 'assets/images/Phone_Image.svg';
    this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl(svgPath);
    this.scrollAnimationService.initScrollAnimation();
  }
}
