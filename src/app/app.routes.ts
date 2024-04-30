import { Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BodyComponent } from './components/body/body.component';
import { EventsComponent } from './components/events/events.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { TAndCComponent } from './components/tand-c/tand-c.component';
import { UpcomingEventsComponent } from './components/events/upcoming-events/upcoming-events.component';
import { PastEventsComponent } from './components/events/past-events/past-events.component';

export const routes: Routes = [
  { path: '', title: 'Furrcrew-V2', component: BodyComponent },
  { path: 'blogs', title: 'Blogs', component: BlogsComponent },
  { path: 'events', title: 'Events', component: EventsComponent },
  { path: 'about', title: 'About', component: AboutUsComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'terms', title: 'Terms', component: TAndCComponent },
  { path: 'upcoming-events', title: 'Event Details', component: UpcomingEventsComponent },
  { path: 'past-events', title: 'Event Details', component: PastEventsComponent },
];
