import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.css',
})
export class BlogsDetailsComponent implements OnInit {
  blogs: any[] = [];
  blog: any;
  mouseDown = false;
  startX!: number;
  scrollLeft!: number;

  constructor(private route: ActivatedRoute, public apiService: ApiService, private router: Router,private elementRef: ElementRef) {}
  getBlogs(blogId: string) {
    this.apiService.getAllBlogs().subscribe((res) => {
      this.blogs = Object.values(res);
      this.blog = this.blogs.find((blog) => blog.id === blogId);
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const blogId = params['blogId']; // Convert to number
      this.getBlogs(blogId);
    });
  }

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
    // this.renderer.addClass(document.body, 'dragging');
  }

  stopDragging(event: MouseEvent) {
    this.mouseDown = false;
    // this.renderer.removeClass(document.body, 'dragging');
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

  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
  filterBlogById(blogs: any[], idToExclude: number): any[] {
    return blogs.filter((blog) => blog.id !== idToExclude);
  }
}
