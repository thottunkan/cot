import { Component } from '@angular/core';
import { HeroComponent } from '../../../utils/hero/hero.component';
import { BlogComponent } from '../../../utils/blog/blog.component';
import { FooterComponent } from '../../../utils/footer/footer.component';
import { LatestnewsComponent } from '../../../utils/latestnews/latestnews.component';
import { NavbarComponent } from '../../../utils/navbar/navbar.component';
import { GalleryComponent } from '../../../utils/gallery/gallery.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HeroComponent,BlogComponent,FooterComponent,LatestnewsComponent,GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
 