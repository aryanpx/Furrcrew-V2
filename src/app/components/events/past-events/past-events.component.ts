import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './past-events.component.html',
  styleUrl: './past-events.component.css',
})
export class PastEventsComponent {
  constructor(private router: Router, public eventsService: EventsService) {}

  goToEventDetails(eventId: number) {
    this.router.navigate(['/events/past-events/details'], { queryParams: { eventId: eventId } });
  }
}
