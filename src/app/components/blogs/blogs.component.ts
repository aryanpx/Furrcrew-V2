import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  title = 'Blogs';
  searchIconUrl = 'assets/icons/searchIcon.svg';
  readMoreIconUrl = 'assets/icons/arrowright.svg';
  blogImageUrl = 'assets/images/dogimage1.jpg';
  items: { imgSrc: string; title: string }[] = [
    {
      imgSrc: 'assets/images/dogimage1.jpg',
      title: 'How to encourage good behaviour in dogs?',
    },
    {
      imgSrc: 'assets/images/dogimage2.png',
      title: 'Teach your pets how to swim this summer',
    },
    {
      imgSrc: 'assets/images/dogimage3.png',
      title: 'Make your pet friendlier with other pets',
    },
    {
      imgSrc: 'assets/images/dogimage4.png',
      title: 'Teach your pets how to swim this summer',
    },
    {
      imgSrc: 'assets/images/dogimage1.jpg',
      title: 'How to encourage good behaviour in dogs?',
    },
    {
      imgSrc: 'assets/images/dogimage2.png',
      title: 'Teach your pets how to swim this summer',
    },
    {
      imgSrc: 'assets/images/dogimage3.png',
      title: 'Make your pet friendlier with other pets',
    },
  ];
}
