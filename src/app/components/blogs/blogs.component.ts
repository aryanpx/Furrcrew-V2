import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  title = 'Blogs';
  searchIconUrl = 'assets/icons/searchIcon.svg';
  readMoreIconUrl = 'assets/icons/arrowright.svg';
  blogImageUrl = 'assets/images/dogimage1.jpg';
  constructor(private router: Router, public blogsService: BlogsService) {}
  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
}
