import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ShowMessageService {
  private sub = new BehaviorSubject<string>(null);

  emettiMessaggio(message) {
    this.sub.next(message);
  }

  riceviMessaggio(): Observable<string> {
    return this.sub.asObservable();
  }
}
