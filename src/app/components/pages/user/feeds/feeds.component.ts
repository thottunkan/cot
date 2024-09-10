import { Component } from '@angular/core';
import { FeedcontentComponent } from '../../../utils/feedcontent/feedcontent.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../../utils/navbar/navbar.component';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [FeedcontentComponent,CommonModule,NavbarComponent,FooterComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.css'
})
export class FeedsComponent {

}
