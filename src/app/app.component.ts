import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
})
export class AppComponent {
  title = 'Furrcrew-V2';
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      // if (event instanceof NavigationStart) {
      // window.onbeforeunload = function () {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
      // };
      // }
    });
  }
}
