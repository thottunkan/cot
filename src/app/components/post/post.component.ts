import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() postImageUrl: string = '';
  @Input() userAvatarUrl: string = '';
  @Input() userName: string = '';
  @Input() postDescription: string = '';
}
