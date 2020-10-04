import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/shared/types';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css', '../../app.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  searchForm!: FormGroup;
  books: IBook[];

  categoriesOptions: string[];

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.categoriesOptions = this.bookService.getCategories();

    this.searchForm = this.fb.group({
      anyField: ['', []],
      categories: [[], []],
      publishedYearRange: [[], []],
      minRating: [0, []],
    });
  }

  resetForm(): void {
    this.searchForm.reset();
  }

  submitForm(): void {
    // this.books = this.bookService.getBooks();
    console.log(this.searchForm.controls);
  }
}
