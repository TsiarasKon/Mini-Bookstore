import { Injectable } from '@angular/core';
import { IBook, IBookDetails } from 'src/app/types';
import books from 'src/app/test-data/books.json'
import { generateRandomRating } from 'src/app/utils';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  TestBooks: IBook[] = books.books.map(el => this.generateBook(el)) 

  constructor() { }

  // This would normally send a GET to the back-end:
  getBooks(): IBook[] {
    return this.TestBooks;
  }

  generateBook(bookDetails: IBookDetails): IBook {
    return {
      bookDetails,
      rating: generateRandomRating(),
    }
  }

}
