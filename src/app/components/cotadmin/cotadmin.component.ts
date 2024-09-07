import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cotadmin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cotadmin.component.html',
  styleUrl: './cotadmin.component.css'
})
export class CotadminComponent {
  isSidebarOpen = false;
  brandName = 'Admin Dashboard';
  userName = 'John Doe';
  avatarUrl = 'https://via.placeholder.com/150'; // Example avatar image
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout() {
    // Handle the logout logic
    console.log('Logging out...');
  }
}
