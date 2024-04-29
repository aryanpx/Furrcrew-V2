import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Input()
  sidebarOpen!: boolean;
  @Input()
  closeSidebar!: () => void;
  constructor(public themeService: ThemeService) {}
}
