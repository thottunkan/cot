import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  isExpanded = false;

  toggleReadMore() {
    this.isExpanded = !this.isExpanded;
  }
}
