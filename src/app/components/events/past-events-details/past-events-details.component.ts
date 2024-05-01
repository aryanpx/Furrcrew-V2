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
}
