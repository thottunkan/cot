import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { PostComponent } from '../../../post/post.component';
import { HeroComponent } from '../../../hero/hero.component';
import { BlogComponent } from '../../../blog/blog.component';
import { FooterComponent } from '../../../footer/footer.component';
import { LatestnewsComponent } from '../../../latestnews/latestnews.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,BlogComponent,FooterComponent,LatestnewsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
