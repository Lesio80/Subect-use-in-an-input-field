import { Component, OnInit } from '@angular/core';
import { ShowMessageService } from '../show-message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private showMessage: ShowMessageService) {}

  send(message) {
    this.showMessage.emettiMessaggio(message);
  }
}
