import { Injectable } from '@angular/core';
import { IBook } from 'src/app/types';
import books from 'src/app/test-data/books.json'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // This would normally send a GET to the back-end:
  getBooks(): IBook[] {
    return books.books;
  }

}
