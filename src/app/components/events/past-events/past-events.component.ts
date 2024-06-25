import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [],
  templateUrl: './past-events.component.html',
  styleUrl: './past-events.component.css',
})
export class PastEventsComponent {
  events: any = [];
  constructor(private router: Router, public eventsService: EventsService, private apiService: ApiService) { }
  goToEventDetails(eventId: number) {
    this.router.navigate(['/events/past-events/details'], { queryParams: { eventId: eventId } });
  }
  formatDate(timestamp: number): string {
    const date = new Date(timestamp);
    const formattedDate = `${this.addZero(date.getDate())} ${this.getMonthName(date.getMonth())} ${date.getFullYear()}`;
    return formattedDate.toUpperCase();
  }
  addZero(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }
  getMonthName(monthIndex: number): string {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthIndex];
  }
  ngOnInit() {
    this.apiService.getPastEvents().subscribe((data) => {
      this.events = data;
    });
  }
}
