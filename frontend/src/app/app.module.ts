import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SportsSectionComponent } from './components/sports-section/sports-section.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ChatBoxComponent } from './components/chat-box/chat-box.component';
import { RegisterLoginComponent } from './components/register-login/register-login.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { WeatherService } from './services/weather.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    SportsSectionComponent,
    WeatherComponent,
    ImageSliderComponent,
    ChatBoxComponent,
    RegisterLoginComponent,
    AddNewsComponent,
    DataListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
