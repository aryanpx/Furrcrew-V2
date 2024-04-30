import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  constructor(private router: Router, public eventsService: EventsService) {}

  goToEventDetails(eventId: number) {
    this.router.navigate(['/upcoming-events'], { queryParams: { eventId: eventId } });
  }
}
