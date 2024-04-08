import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ForecastService } from '../services/forecast.service';

import Chart from 'chart.js/auto'

@Component({
	selector: 'app-weather-city',
	templateUrl: './weather-city.component.html',
	styleUrls: ['./weather-city.component.css']
})
export class WeatherCityComponent implements OnInit {

	private cityCode = '';
	private periods: any;

	constructor(private route: ActivatedRoute,
				private router: Router,
				private forecastService: ForecastService) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.cityCode = params['code'];
			this.getForecast();
		})
	}

	private getForecast(){
		this.forecastService.getForecastCity(this.cityCode).subscribe({
			next: forecast => {
				let cityForecast = JSON.parse(JSON.stringify(forecast));
				this.periods = cityForecast.properties.periods;

				this.createChart();
			},
			error: err => {
				console.log(err);
			}
		})
	}

	private createChart(){
		new Chart(<HTMLCanvasElement>document.getElementById('canvas'),
			{
			  type: 'line',
			  data: {
				labels: this.periods.map((p: any) => p.name),
				datasets: [
				  {
					label: 'Temperature (in F°)',
					data: this.periods.map((p: any) => p.temperature),
					borderColor: '#166f6c',
					pointBorderColor: '#166f6c',
					pointBorderWidth: 7
				  }
				]
			  }
			}
		  );
	}

	public back(){
		this.router.navigate(['']);
	}
}
