import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-past-events-details',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './past-events-details.component.html',
  styleUrl: './past-events-details.component.css',
})
export class PastEventsDetailsComponent {
  event: any;

  constructor(private route: ActivatedRoute, public eventsService: EventsService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventId = +params['eventId']; // Convert to number
      this.event = this.eventsService.events.find((event) => event.id === eventId);
    });
  }
  img1 = 'assets/images/event-gallery (1).png';
  img2 = 'assets/images/event-gallery (2).png';
  img3 = 'assets/images/event-gallery (3).png';
  img4 = 'assets/images/event-gallery (4).png';
  img5 = 'assets/images/event-gallery (5).png';
  img6 = 'assets/images/event-gallery (6).png';
  img7 = 'assets/images/event-gallery (7).png';
  img8 = 'assets/images/event-gallery (8).png';
  img9 = 'assets/images/event-gallery (9).png';
}
