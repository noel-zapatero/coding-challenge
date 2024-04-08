import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class ForecastService{

	private url_pref = "https://api.weather.gov/gridpoints/";
	private url_suf = "/31,80/forecast";

	constructor(private http: HttpClient){}

	public getForecastCity(cityCode: string){
		return this.http.get(this.url_pref + cityCode + this.url_suf);
	}
}