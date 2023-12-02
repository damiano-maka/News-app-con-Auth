import { Injectable } from '@angular/core';
import { Article } from '../models/news.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/data_server.model';

@Injectable({
  providedIn: 'root'
})
export class SalvaNotiziaService {

  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  public salvaNotizia(notizie: Article): Observable<Article> {
    return this.http.post<Article>(`${this.baseUrl}/posts`, notizie);
  }

  public getNotizieSalvate(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(`${this.baseUrl}/posts`);
  }

  public cancellaNotizia(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/posts/${id}`);
  }
  


}
