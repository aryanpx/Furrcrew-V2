import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';
// import { HttpClient } from '@angular/common/http';
import gsap from 'gsap';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
// import $ from 'jquery';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  @ViewChild('searchComponent') searchComponent!: ElementRef;
  formGroup: FormGroup = new FormGroup({});
  // http = inject(HttpClient);
  blogs: any = [];
  title = 'Blogs';
  searchIconUrl = 'assets/icons/searchIcon.svg';
  readMoreIconUrl = 'assets/icons/arrowright.svg';
  filteredBlogs: any[] = []; // Filtered list of blogs
  searchQuery: string = ''; // Search query
  search: any;

  constructor(
    private router: Router,
    public blogsService: BlogsService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private elementRef: ElementRef
  ) {
    this.formGroup = fb.group({ search: [''] });
  }
  ngOnInit(): void {
    this.apiService.getAllBlogs().subscribe((data) => {
      this.blogs = Object.values(data);
      this.filteredBlogs = this.blogs;
    });
    this.formGroup.get('search')?.valueChanges.subscribe((value) => {
      this.searchQuery = value;
      this.filterBlogs(); // Call your filter function
    });
  }
  filterBlogs() {
    // console.log('filter is called');
    this.filteredBlogs = this.blogs.filter((blog: any) => blog.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
  }
  goToBlogsDetails(blogId: number) {
    this.router.navigate(['/blogs/details'], { queryParams: { blogId: blogId } });
  }
  scrollToTop() {
    console.log('click working');
    // if (typeof window !== 'undefined') {
    //   gsap.to(window, { duration: 2, scrollTo: '#search', ease: 'power2' });
    // }
    if (this.searchComponent) {
      this.searchComponent.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // this.router.navigate([], { fragment: 'search' });
    // gsap.to(window, { duration: 2, scrollTo: "#search", ease: "power2" })
    // const searchTop = $('#pTop')?.offset()?.top;
    // $('html, body').animate(
    //   {
    //     scrollTop: searchTop,
    //   },
    //   500
    // );
    // $('search').animatescroll();
  }
}
