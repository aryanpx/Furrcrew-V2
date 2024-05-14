import { Component } from '@angular/core';
import { ServiceTabsComponent } from '../service-tabs/service-tabs.component';
import { VerticalEventsComponent } from '../vertical-events/vertical-events.component';
import { BlogsListComponent } from '../blogs-list/blogs-list.component';
import { ScrollableDivComponent } from '../scrollable-div/scrollable-div.component';
import { PetVideoComponentComponent } from '../pet-video-component/pet-video-component.component';
import { FooterComponent } from '../footer/footer.component';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    ServiceTabsComponent,
    VerticalEventsComponent,
    BlogsListComponent,
    ScrollableDivComponent,
    PetVideoComponentComponent,
    FooterComponent,
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationStart) {
      // window.onbeforeunload = function () {
      window.scrollTo(0, 0);
      // };
      // }
    });
  }
}
