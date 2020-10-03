import { Injectable } from '@angular/core';
import { IBook } from 'src/app/shared/types';
import books from 'src/app/test-data/books.json'
import { generateBook } from 'src/app/shared/utils';
import { TestCategories } from 'src/app/test-data/misc';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor() { }

  Books: IBook[] = books.books.map((el, i) => ({ ...generateBook(el), id: i })) 
  Categories: string[] = TestCategories

  private getNextBookId(): number {
    return Math.max(...this.Books.map(el => el.id)) + 1;
  }

  // The following would normally send a GET to the back-end:
  getBooks(): IBook[] {
    return this.Books;
  }

  getBookById(id: number): IBook {
    return this.Books.find(el => el.id === id);
  }

  getCategories(): string[] {
    return this.Categories;
  }

  // This would normally send a POST to the back-end, with an appropriate request body:
  postBook(book: IBook): void {
    this.Books.push({ ...book, id: this.getNextBookId() });
  }
}
