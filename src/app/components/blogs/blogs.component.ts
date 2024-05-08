import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FooterComponent, FormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  http = inject(HttpClient);
  blogs: any = [];
  title = 'Blogs';
  searchIconUrl = 'assets/icons/searchIcon.svg';
  readMoreIconUrl = 'assets/icons/arrowright.svg';
  filteredBlogs: any[] = []; // Filtered list of blogs
  searchQuery: string = ''; // Search query
  ngOnInit(): void {
    this.apiService.getAllBlogs().subscribe((data) => {
      this.blogs = Object.values(data);
      this.filteredBlogs = this.blogs;
    });
  }
  onFormSubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior
    this.filterBlogs(); // Call your filter function
  }
  filterBlogs() {
    console.log('filter is called');
    this.filteredBlogs = this.blogs.filter((blog: any) => blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    console.log('🚀 ~ BlogsComponent ~ filterBlogs ~ ', this.searchQuery);
  }
  constructor(private router: Router, public blogsService: BlogsService, private apiService: ApiService) {}
  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
}
