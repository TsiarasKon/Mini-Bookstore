import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private emitIncCart = new Subject<any>();
  changeEmitted$ = this.emitIncCart.asObservable();

  // Of course, this function would normally carry as an argument the book('s id) itself
  emitBuyClicked(): void {
    this.emitIncCart.next();
  }

}
