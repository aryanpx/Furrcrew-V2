import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs-details',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.css',
})
export class BlogsDetailsComponent implements OnInit {
  blogs: any[] = [];
  blog: any;

  constructor(private route: ActivatedRoute, public apiService: ApiService, private router: Router) {}
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
  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
}
