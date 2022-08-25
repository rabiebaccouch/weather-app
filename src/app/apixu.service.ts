import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(id: string){
    console.log("id = " + id);
    return this.http.get(
        //'http://api.weatherstack.com/current?access_key=0ff338302010071a1ec0fb2039b2cb71&query=' + location
        'http://127.0.0.1:49345/restaurant/' + id
    );
}
}