import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs-list',
  standalone: true,
  imports: [],
  templateUrl: './blogs-list.component.html',
  styleUrl: './blogs-list.component.css',
})
export class BlogsListComponent {
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
