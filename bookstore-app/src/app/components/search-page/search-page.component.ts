import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/types';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: IBook[];

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
