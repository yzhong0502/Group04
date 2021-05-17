import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SportsSectionComponent } from './components/sports-section/sports-section.component';
import {HomeComponent} from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"sports",component:SportsSectionComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"about-us",component:AboutUsComponent},
  {path: 'login',component: RegisterLoginComponent},
  {path: 'add-news',component: AddNewsComponent, canActivate: [AuthGuard]},
  {path: 'news-list', component: DataListComponent},
  {path:"**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
