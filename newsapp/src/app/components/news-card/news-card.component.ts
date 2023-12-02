import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Article } from 'src/app/models/news.model';
@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input()  news!: Article ;
  @Output() cliccato: EventEmitter<Article> = new EventEmitter();

  onClick(): void {
    this.cliccato.emit(this.news);
  }
}
