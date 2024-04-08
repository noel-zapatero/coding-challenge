import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherCityComponent } from './weather-city/weather-city.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{	path: '', component: HomeComponent	},
	{	path: 'weather/:code', component: WeatherCityComponent	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
