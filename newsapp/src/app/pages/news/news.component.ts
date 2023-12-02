import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/news.model';
import { ApiCallService } from 'src/app/services/api-call.service';
import { AuthService } from 'src/app/services/auth.service';
import { SalvaNotiziaService } from 'src/app/services/salva-notizia.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NewsSalvateComponent } from 'src/app/components/news-salvate/news-salvate.component';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  {
nomeUtente : string | undefined = this.authService.nomeUtente
listaNotizie: Article[] = [];

constructor(private authService: AuthService, private apiCall: ApiCallService,private router: Router , private salvaNotizia: SalvaNotiziaService ,public dialog: MatDialog) {  this.getNews();}

private getNews(): void {
  this.apiCall.getAllNews()
    .subscribe((data) => {
      this.listaNotizie = data.articles;
    })
}

public OnClick(news: Article): void {
  this.salvaNotizia.salvaNotizia(news).subscribe(news => {
    alert("Notizia Salvata!")
  });
}

public onLogOut():void{
  localStorage.removeItem('accessToken'); 
  this.router.navigate(['auth/login']);
}


openDialog() {
  const dialogRef = this.dialog.open(NewsSalvateComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}}



