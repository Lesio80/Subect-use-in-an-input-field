import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ShowComponent } from './show/show.component';
import { ShowMessageService } from './show-message.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, HeaderComponent, ShowComponent],
  providers: [ShowMessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
