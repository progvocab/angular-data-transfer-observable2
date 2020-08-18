import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MainService {

  constructor() { }

  private message = new BehaviorSubject('First Message');
  public sharedMessage = this.message.asObservable();

   

  nextMessage(message: string) {
    this.message.next(message)
  }

}