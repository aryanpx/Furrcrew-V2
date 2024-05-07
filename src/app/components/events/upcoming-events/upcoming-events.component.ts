import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { FooterComponent } from '../../footer/footer.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css',
})
export class UpcomingEventsComponent implements OnInit {
  event: any;
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Listen for window resize events
    this.checkScreenSize();
  }

  checkScreenSize() {
    // Check screen width and set isMobileView accordingly
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint as needed
  }

  constructor(private route: ActivatedRoute, public eventsService: EventsService, @Inject(PLATFORM_ID) private platformId: Object) {
    // Check initial screen size on component initialization
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventId = +params['eventId']; // Convert to number
      this.event = this.eventsService.events.find((event) => event.id === eventId);
    });
  }
  isFlipped: boolean = false;

  flipCard() {
    if (!this.isMobileView) {
      this.isFlipped = !this.isFlipped;
    }
  }
}
