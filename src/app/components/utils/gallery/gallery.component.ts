import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images = [
    { thumbnail: 'https://scontent.fcok15-1.fna.fbcdn.net/v/t39.30808-6/368603718_597565062551233_4748334390614011830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NikLu2i-FAUQ7kNvgGuvhFl&_nc_ht=scontent.fcok15-1.fna&oh=00_AYDdhdZfWVRADwg7NzeQhegD7zJPjKzzarQHpq3t-_VaHg&oe=66E49252', fullsize: 'https://via.placeholder.com/800x600' },
    { thumbnail: 'https://via.placeholder.com/300', fullsize: 'https://via.placeholder.com/800x600' },
    { thumbnail: 'https://via.placeholder.com/300', fullsize: 'https://via.placeholder.com/800x600' },
    { thumbnail: 'https://via.placeholder.com/300', fullsize: 'https://via.placeholder.com/800x600' },
    { thumbnail: 'https://via.placeholder.com/300', fullsize: 'https://via.placeholder.com/800x600' },
    { thumbnail: 'https://via.placeholder.com/300', fullsize: 'https://via.placeholder.com/800x600' },
    // Add more images here
  ];

  selectedImage: { thumbnail: string, fullsize: string } | null = null;

  openModal(image: { thumbnail: string, fullsize: string }) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

}
