import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserModel } from 'src/app/models/auth.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
   @Input() navigation1! : string ;
   @Input() navigation2! : string ;
   @Input() navigation3! : string ;
   @Input() nome1! : string ;
   @Input() nome2! : string ;
   @Input() nome3! : string ;
   @Input() salute! : string ;
   @Input() testo! : string | undefined ;
   @Output() logOutClicked: EventEmitter<void> = new EventEmitter();


   public cliccato(): void {
     this.logOutClicked.emit();
   }
}
