import { Component, Input, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  @Output() closeSidebar = new EventEmitter<void>();
  @Input() sidebarOpen!: boolean;
  @Input() theme!: 'light' | 'dark';
  constructor(private commonService: CommonService, private elementRef: ElementRef) {}

  toggleSidebar(): void {
    this.commonService.setSidebar(!this.sidebarOpen);
  }
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.closeSidebar.emit();
    }
  }
}
