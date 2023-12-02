import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthRequestModel, AuthResponseModel, UserModel } from '../models/auth.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL: string = 'http://localhost:3000';
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(localStorage.getItem('accessToken') !== undefined)
 
  constructor(private http: HttpClient) { }

  public login(body: AuthRequestModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.baseURL}/login`, body)
  }
  nomeUtente : string | undefined = '';

  public register(body: AuthRequestModel): Observable<AuthResponseModel> {
    return this.http.post<AuthResponseModel>(`${this.baseURL}/register`, body)
  }
   
}
