import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/pages/user/home/home.component';
import { CotadminComponent } from './components/pages/admin/cotadmin/cotadmin.component';
import { LoginComponent } from './components/login/login.component';
import { AdminhomeComponent } from './components/pages/admin/adminhome/adminhome.component';
import { AddpostComponent } from './components/pages/admin/addpost/addpost.component';
import { ViewallpostComponent } from './components/viewallpost/viewallpost.component';

export const  routes: Routes = [
    {path:"", component: WelcomeComponent},
    {path:"home", component: HomeComponent},
    {path:"cotadmin", component: CotadminComponent},
    {path:"login", component: LoginComponent},
    {path:"admin", component: AdminhomeComponent},
    {path:"admin/addpost", component: AddpostComponent},
    {path:"admin/viewallposts", component: ViewallpostComponent},
  ];