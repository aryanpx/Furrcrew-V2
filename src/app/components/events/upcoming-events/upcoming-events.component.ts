import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css',
})
export class UpcomingEventsComponent implements OnInit {
  event: any;

  constructor(private route: ActivatedRoute, public eventsService: EventsService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventId = +params['eventId']; // Convert to number
      this.event = this.eventsService.events.find((event) => event.id === eventId);
    });
  }
}
