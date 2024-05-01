import { Component } from '@angular/core';
import { BlogsService } from '../../../services/blogs.service';
import { ActivatedRoute } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-blogs-details',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './blogs-details.component.html',
  styleUrl: './blogs-details.component.css',
})
export class BlogsDetailsComponent {
  blog: any;

  constructor(private route: ActivatedRoute, public blogsService: BlogsService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const blogId = +params['blogId']; // Convert to number
      this.blog = this.blogsService.blogs.find((blog) => blog.id === blogId);
    });
  }
}
