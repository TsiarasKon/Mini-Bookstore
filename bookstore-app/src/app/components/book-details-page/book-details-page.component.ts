import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/shared/types';
import { chunks } from 'src/app/shared/utils';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css', '../../app.component.css']
})
export class BookDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  bookId: number;
  book: IBook;
  carouselBooksArray: Array<IBook[]>;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get("id");    // retrieve book id from the URL
      this.book = this.bookService.getBookById(this.bookId);
      console.log(this.book);
    })
    this.carouselBooksArray = [...chunks(this.bookService.getBooks(), 4)];
  }


}
