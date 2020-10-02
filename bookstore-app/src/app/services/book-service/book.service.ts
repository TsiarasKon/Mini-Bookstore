import { Injectable } from '@angular/core';
import { IBook } from 'src/app/shared/types';
import books from 'src/app/test-data/books.json'
import { generateBook } from 'src/app/shared/utils';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  TestBooks: IBook[] = books.books.map(el => generateBook(el)) 

  constructor() { }

  // This would normally send a GET to the back-end:
  getBooks(): IBook[] {
    return this.TestBooks;
  }

  // This would normally send a POST to the back-end, with an appropriate request body:
  postBook(book: IBook): void {
    this.TestBooks.push(book);
  }
}
