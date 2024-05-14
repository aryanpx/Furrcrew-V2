import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vertical-events',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vertical-events.component.html',
  styleUrl: './vertical-events.component.css',
})
export class VerticalEventsComponent {
  events: any[] = [];
  constructor(private apiService: ApiService, private router: Router) {
    this.apiService.getActiveEvents().subscribe((data: any) => {
      this.events = Object.values(data);
    });
  }
  formatUnixTimestamp(timestamp: number): string {
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
  goToEventDetails(eventId: number) {
    this.router.navigate(['/events/upcoming-events'], { queryParams: { eventId: eventId } });
  }
}
