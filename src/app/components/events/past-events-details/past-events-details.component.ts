import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-past-events-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './past-events-details.component.html',
  styleUrl: './past-events-details.component.css',
})
export class PastEventsDetailsComponent implements OnInit {
  events: any[] = [];
  event: any;

  constructor(private route: ActivatedRoute, public eventsService: EventsService, private apiService: ApiService) { }
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
  getEvents(eventId: string) {
    this.apiService.getActiveEvents().subscribe((res) => {
      this.events = Object.values(res);
      this.event = this.events.find((event) => event.id === eventId);
      // console.log("🚀 ~ PastEventsDetailsComponent ~ this.apiService.getActiveEvents ~ this.event:", this.event)
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const eventId = params['eventId']; // Convert to number
      this.getEvents(eventId);
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
