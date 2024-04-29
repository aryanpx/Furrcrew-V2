import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-pet-video-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-video-component.component.html',
  styleUrl: './pet-video-component.component.css',
})
export class PetVideoComponentComponent {
  isMobile: boolean = false;
  constructor(@Inject(DOCUMENT) private document: Document) {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 769;
    }
  }
  mobileVideoPath = 'assets/videos/pet_video_portrait.mp4';
  desktopVideoPath = 'assets/videos/pet_video.mp4';
}
