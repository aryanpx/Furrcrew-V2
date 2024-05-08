import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css',
})
export class BlogsListComponent {
  items: any[] = [];
  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
  constructor(private router: Router, private apiService: ApiService) {
    console.log('Blogs is running');
    this.apiService.getAllBlogs().subscribe((res) => {
      this.items = Object.values(res);
    });
  }
}
