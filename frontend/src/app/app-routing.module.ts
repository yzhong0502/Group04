import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';

const routes: Routes = [
  {path: 'login',component: RegisterLoginComponent},
  {path: 'add-news',component: AddNewsComponent},
  {path: 'news-list', component: DataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
