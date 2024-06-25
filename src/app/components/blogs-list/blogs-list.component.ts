import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css',
})
export class BlogsListComponent implements OnInit {
  mouseDown = false;
  startX!: number;
  scrollLeft!: number;

  constructor(private router: Router, private apiService: ApiService, private elementRef: ElementRef, private renderer: Renderer2) {
    // console.log('Blogs is running');
    this.apiService.getAllBlogs().subscribe((res) => {
      this.items = Object.values(res);
    });
  }

  ngOnInit(): void { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.move(event);
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startDragging(event);
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    this.stopDragging(event);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: MouseEvent) {
    this.stopDragging(event);
  }

  startDragging(event: MouseEvent) {
    this.mouseDown = true;
    const slider = this.elementRef.nativeElement.querySelector('.parent');
    this.startX = event.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
    this.renderer.addClass(document.body, 'dragging');
  }

  stopDragging(event: MouseEvent) {
    this.mouseDown = false;
    this.renderer.removeClass(document.body, 'dragging');
  }

  move(event: MouseEvent) {
    event.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    const slider = this.elementRef.nativeElement.querySelector('.parent');
    const x = event.pageX - slider.offsetLeft;
    const scroll = x - this.startX;
    slider.scrollLeft = this.scrollLeft - scroll;
  }

  items: any[] = [];
  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
}
