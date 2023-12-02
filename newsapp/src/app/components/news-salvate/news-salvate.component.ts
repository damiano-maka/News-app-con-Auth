import { Component } from '@angular/core';
import { Post } from 'src/app/models/data_server.model';
import { Article } from 'src/app/models/news.model';
import { AuthService } from 'src/app/services/auth.service';
import { SalvaNotiziaService } from 'src/app/services/salva-notizia.service';

@Component({
  selector: 'app-news-salvate',
  templateUrl: './news-salvate.component.html',
  styleUrls: ['./news-salvate.component.css']
})
export class NewsSalvateComponent {
  
  listaNotizieSalvate: Post[] = [];
  nomeUtente : string | undefined = this.auth.nomeUtente
  constructor(private salvaNotizia: SalvaNotiziaService , private auth : AuthService) {  this.getNotizieSalvate();} 

  private getNotizieSalvate(): void {
    this.salvaNotizia.getNotizieSalvate()
      .subscribe((data) => {
        this.listaNotizieSalvate = data;
      })
  } 

  
  delete(newsID: Post): void {
    this.salvaNotizia.cancellaNotizia(newsID.id).subscribe(
      () => {
        alert('Notizia cancellata!');
        location.reload();
      }
    );
  }
}
