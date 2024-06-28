import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
  constructor(private sanitizer: DomSanitizer, private scrollAnimationService: ScrollAnimationService) { }
  ngOnInit(): void {
    // Assuming your SVG file is located in the assets folder
    this.imageSrc = this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/Phone_Image.svg');
    // this.scrollAnimationService.initScrollAnimation();
    this.scrollAnimationService.gsapScrollAnimation()
  }

}
