import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  blogs: any[] = [
    {
      id: 1,
      imgSrc: 'assets/images/dogimage1.jpg',
      title: 'How to encourage good behaviour in dogs?',
    },
    {
      id: 2,
      imgSrc: 'assets/images/dogimage2.png',
      title: 'Teach your pets how to swim this summer',
    },
    {
      id: 3,
      imgSrc: 'assets/images/dogimage3.png',
      title: 'Make your pet friendlier with other pets',
    },
    {
      id: 4,
      imgSrc: 'assets/images/dogimage4.png',
      title: 'Is eye shade getting dark in cats natural?',
    },
    {
      id: 5,
      imgSrc: 'assets/images/dogimage1.jpg',
      title: '3 commands to teach your new furry member',
    },
    {
      id: 6,
      imgSrc: 'assets/images/dogimage2.png',
      title: 'Teach your pets how to swim this summer',
    },
    {
      id: 7,
      imgSrc: 'assets/images/dogimage3.png',
      title: 'Make your pet friendlier with other pets',
    },
  ];
  constructor() {}
}
