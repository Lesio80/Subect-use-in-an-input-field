import { Component, OnInit } from '@angular/core';
import { ShowMessageService } from '../show-message.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent {
  messaggio: string;

  constructor(private showMessage: ShowMessageService) {
    showMessage.riceviMessaggio().subscribe((res) => (this.messaggio = res));
  }
}
