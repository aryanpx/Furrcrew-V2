import { Component, HostListener, Inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  events: any = [];
  videoWidth: string = '66.666667%';
  isMobile: boolean = false;
  constructor(
    private router: Router,
    private apiService: ApiService,
    @Inject(DOCUMENT) private document: Document,
    public eventService: EventsService
  ) {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 769;
    }
  }
  ngOnInit() {
    this.apiService.getActiveEvents().subscribe((data) => {
      this.events = data;
    });
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
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const viewportHeight = window.innerHeight;
    if (scrollPosition < viewportHeight) {
      const widthIncrease = (scrollPosition / viewportHeight) * 33.333333; // Calculate the percentage increase based on scroll
      this.videoWidth = `${66.666667 + widthIncrease}%`;
    } else {
      this.videoWidth = '100%';
    }
  }
  goToEventDetails(eventId: number) {
    this.router.navigate(['/events/upcoming-events'], { queryParams: { eventId: eventId } });
  }
}
