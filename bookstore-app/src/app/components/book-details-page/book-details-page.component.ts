import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/shared/types';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css', '../../app.component.css']
})
export class BookDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  bookId: number;
  book: IBook;

  ngOnInit() {
    this.bookId = +this.route.snapshot.paramMap.get("id");
    this.book = this.bookService.getBookById(this.bookId);
    console.log(this.book);
  }

}
