import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  events: any[] = [
    {
      id: 1,
      title: 'Summer Social',
      time: 'Sunday, 14 Apr 2024 | 4pm-8pm',
      location: 'The Community Table, Balewadi, Pune',
      imageUrl: 'assets/images/upcoming-events1.png',
      about:
        'FurrFiesta is coming to Hinjewadi with our signature Fun & Games, Pet Trivia, Pet Painting, and much more. Drop by for a fun summer time with your furry buddies!',
      price: '299',
      description:
        "Learn all there is to know about your cat's behaviour, body language, and much more at our Cat Parenting Crash Course at Time Table by Ventive!Please note that this is a free walk-in event, and no purchases would be required for the same. To register, please reach out to us on +91 9067225552 or support@furrcrew.com",
    },
    {
      id: 2,
      title: 'Summer Social',
      time: 'Sunday, 14 Apr 2024 | 4pm-8pm',
      location: 'The Community Table, Balewadi, Pune',
      imageUrl: 'assets/images/upcoming-events2.png',
      about:
        'FurrFiesta is coming to Hinjewadi with our signature Fun & Games, Pet Trivia, Pet Painting, and much more. Drop by for a fun summer time with your furry buddies!',
      price: '299',
      description:
        "Learn all there is to know about your cat's behaviour, body language, and much more at our Cat Parenting Crash Course at Time Table by Ventive!Please note that this is a free walk-in event, and no purchases would be required for the same. To register, please reach out to us on +91 9067225552 or support@furrcrew.com",
    },
    // Add more events as needed
  ];
  constructor() {}
}
