import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HomeComponent } from './components/pages/user/home/home.component';
import { CotadminComponent } from './components/pages/admin/cotadmin/cotadmin.component';

import { AdminhomeComponent } from './components/pages/admin/adminhome/adminhome.component';
import { AddpostComponent } from './components/pages/admin/addpost/addpost.component';
import { ViewallpostComponent } from './components/viewallpost/viewallpost.component';
import { LoginComponent } from './components/pages/admin/login/login.component';
import { NarayanaguruComponent } from './components/pages/user/narayanaguru/narayanaguru.component';
import { FAQComponent } from './components/pages/user/faq/faq.component';

export const  routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"home", redirectTo:""},
    {path:"cotadmin", component: CotadminComponent},
    {path:"login", component: LoginComponent},
    {path:"faq", component: FAQComponent},
    {path:"admin", component: AdminhomeComponent},
    {path:"sng", component: NarayanaguruComponent},
    {path:"admin/addpost", component: AddpostComponent},
    {path:"admin/viewallposts", component: ViewallpostComponent},
  ];