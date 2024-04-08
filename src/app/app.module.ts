import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { HomeComponent } from './home/home.component';
import { ForecastService } from './services/forecast.service';

@NgModule({
  declarations: [		
    AppComponent,
      WeatherCityComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
