import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export class City {
	fullName: string = '';
	code: string = '';
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	public cities: City[] = [{fullName: 'District of Columbia Forecast ( LWX )', code: 'LWX'},{fullName: 'Kansas Forecast ( TOP )', code: 'TOP'}];
	
	constructor(private router: Router,
				private route: ActivatedRoute){}

	ngOnInit(): void {}

	showWeather(cityCode: string){
		this.router.navigate(['weather', cityCode], {relativeTo: this.route});
	}

}
