import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/home/home.component';
import { CotadminComponent } from './components/cotadmin/cotadmin.component';

export const  routes: Routes = [
    {path:"", component: WelcomeComponent},
    {path:"home", component: HomeComponent},
    {path:"cotadmin", component: CotadminComponent}
  ];