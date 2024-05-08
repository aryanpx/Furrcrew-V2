import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css',
})
export class UpcomingEventsComponent implements OnInit {
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
    this.apiService.getAllEvents().subscribe((res) => {
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
}
