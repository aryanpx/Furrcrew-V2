import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { ApiService } from '../../../services/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-past-events',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './past-events.component.html',
  styleUrl: './past-events.component.css',
})
export class PastEventsComponent {
  @ViewChild('searchComponent') searchComponent!: ElementRef;
  formGroup: FormGroup = new FormGroup({});
  events: any = [];
  filteredEvents: any[] = []; // Filtered list of events
  searchQuery: string = ''; // Search query
  search: any;
  constructor(private router: Router, public eventsService: EventsService, private apiService: ApiService, private fb: FormBuilder) {
    this.formGroup = fb.group({ search: [''] });
  }
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
      this.filteredEvents = this.events;
    });
    this.formGroup.get('search')?.valueChanges.subscribe((value) => {
      this.searchQuery = value;
      this.filterEvents(); // Call your filter function
    });
  }

  filterEvents() {
    this.filteredEvents = this.events.filter((blog: any) => blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
  scrollToTop() {

    if (this.searchComponent) {
      this.searchComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
