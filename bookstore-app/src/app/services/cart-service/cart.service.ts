import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private emitIncCart = new Subject<any>();
  changeEmitted$ = this.emitIncCart.asObservable();

  emitBuyClicked() {
    this.emitIncCart.next();
  }

}
