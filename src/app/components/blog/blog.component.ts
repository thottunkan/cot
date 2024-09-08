import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = [
    {
      title: 'The Future of Tech',
      image: 'https://source.unsplash.com/800x600?tech',
      description: 'Explore the advancements in technology and how they are shaping our future.',
      link: '#',
    },
    {
      title: 'Nature and Well-being',
      image: 'https://source.unsplash.com/800x600?nature',
      description: 'Discover the connection between nature and mental health.',
      link: '#',
    },
    {
      title: 'Culinary Adventures',
      image: 'https://source.unsplash.com/800x600?food',
      description: 'Join us on a journey through the world\'s best cuisines.',
      link: '#',
    },
  ];
}
