import { Component, HostListener, Inject } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router, RouterLink } from '@angular/router';
import { EventsService } from '../../services/events.service';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [FooterComponent, RouterLink, CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  events: any = [];
  imageWidth: string = '66.666667%';
  isMobile: boolean = false;
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
  constructor(private router: Router, private apiService: ApiService, @Inject(DOCUMENT) private document: Document) {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 769;
    }
  }
  ngOnInit() {
    this.apiService.getActiveEvents().subscribe((data) => {
      this.events = data;
    });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition < window.innerHeight) {
      const widthIncrease = (scrollPosition / window.innerHeight) * 33.333333; // Calculate the percentage increase based on scroll
      this.imageWidth = `${66.666667 + widthIncrease}%`;
    } else {
      this.imageWidth = '100%'; // Once the scroll is past the screen height, ensure image is full width
    }
  }
  goToEventDetails(eventId: number) {
    this.router.navigate(['/events/upcoming-events'], { queryParams: { eventId: eventId } });
  }
}
