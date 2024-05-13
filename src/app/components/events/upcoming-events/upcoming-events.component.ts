import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../../services/api.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [FooterComponent, CommonModule, RouterLink, GoogleMapsModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css',
})
export class UpcomingEventsComponent implements OnInit {
  showDescription: boolean = true;
  showTerms: boolean = false;
  showLocation: boolean = false;
  showBookModal: boolean = false;
  events: any[] = [];
  event: any;
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }
  getEvents(eventId: string) {
    this.apiService.getActiveEvents().subscribe((res) => {
      this.events = Object.values(res);
      this.event = this.events.find((event) => event.id === eventId);
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventId = params['eventId']; // Convert to number
      this.getEvents(eventId);
    });
  }
  isFlipped: boolean = false;

  flipCard() {
    if (!this.isMobileView) {
      this.isFlipped = !this.isFlipped;
    }
  }
  formatDate(unixTimestamp: number): string {
    const date = new Date(unixTimestamp * 1000);
    return date.toUTCString(); // Adjust format as per your requirement
  }
  toggleModal() {
    this.showBookModal = !this.showBookModal;
  }
  toggleDescription() {
    this.showDescription = !this.showDescription;
  }
  toggleTerms() {
    this.showTerms = !this.showTerms;
  }
  toggleLocation() {
    this.showLocation = !this.showLocation;
  }
  display: any;
  zoom = 4;
  parseCoordinate(value: string): number {
    return parseFloat(value);
  }
}
