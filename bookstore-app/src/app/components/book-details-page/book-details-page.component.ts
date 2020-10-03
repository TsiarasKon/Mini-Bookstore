import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/shared/types';
import { chunks } from 'src/app/shared/utils';

@Component({
  selector: 'app-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css', '../../app.component.css']
})
export class BookDetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService, private message: NzMessageService) { }

  bookId: number;
  book: IBook;
  isFavorite = false;

  carouselBooksArray: Array<IBook[]>;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.bookId = +params.get("id");    // retrieve book id from the URL
      this.book = this.bookService.getBookById(this.bookId);
      this.isFavorite = this.book.favorite;
      console.log(this.book);
    })
    this.carouselBooksArray = [...chunks(this.bookService.getBooks(), 4)];
  }

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
    this.bookService.toggleBookFavorite(this.bookId, this.isFavorite);
  }

  onShareClick(): void {
    this.message.remove();
    this.message.success("Let's assume that this button shared something somewhere!", { nzDuration: 4000 });
  }

}
