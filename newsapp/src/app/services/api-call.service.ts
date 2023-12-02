import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/news.model';


@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private baseURL = 'https://newsapi.org/v2/everything?q=italia&language=it&pageSize=100&apiKey=306021cf39424031b1c3ac021ef1fb9b'

  constructor(private http: HttpClient) { }

  public getAllNews(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(this.baseURL);
  }

}
