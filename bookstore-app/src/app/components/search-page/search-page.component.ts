import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/shared/types';
import { includesCaseIns } from 'src/app/shared/utils';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css', '../../app.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private bookService: BookService, private fb: FormBuilder) { }

  searchForm!: FormGroup;
  books: IBook[] = [];
  resultsLoading = true;
  delayDuration = 750;   // fake delay for data retrieval - gotta make it believable!

  categoriesOptions: string[];

  ngOnInit() {
    this.initializeForm();
    this.categoriesOptions = this.bookService.getCategories();
    setTimeout(() => {
      this.books = this.bookService.getBooks();
      this.resultsLoading = false;
    }, this.delayDuration);
  }

  initializeForm(): void {
    this.searchForm = this.fb.group({
      anyField: ['', []],
      categories: [[], []],
      publishedYearRange: [[], []],
      minRating: [0, []],
    });
  }

  /**
   * Filtering logic:
   * For any text provided in the search's input a check is performed for whether it is a substring of 
   * the book's title, publisher or any of its authors. For ISBNs, a full string match is required.
   * For "Categories" field, books are returned whose categories contain any of the provided ones.
   * "Published Year Range" and "Minimum Rating" fields are self-explanatory.
   * If multiple filters are filled in then the obvious requirement is that the returned results 
   * comply by all of them combined.
   * Of course, the filtering would ideally be performed server-side, by passing the proper parameters
   */
  getFilteredBooks(): IBook[] {
    const { anyField, categories, publishedYearRange, minRating } = this.searchForm.controls;
    return this.bookService.getBooks().filter(el =>
      (!anyField.value ||
        includesCaseIns(el.title, anyField.value) ||
        includesCaseIns(el.publisher, anyField.value) ||
        el.authors.some(author => includesCaseIns(author, anyField.value)) ||
        el.isbn10 === anyField.value ||
        el.isbn13 === anyField.value
      ) &&
      (!categories.value?.length ||
        el.categories.some(cat => categories.value.includes(cat))
      ) &&
      (!publishedYearRange.value?.length ||
        (el.publishedYear >= publishedYearRange.value[0].getFullYear() &&
          el.publishedYear <= publishedYearRange.value[1].getFullYear())
      ) &&
      (!minRating.value || el.rating >= minRating.value)
    );
  }

  resetForm(): void {
    this.searchForm.reset();
  }

  submitForm(): void {
    this.resultsLoading = true;
    setTimeout(() => {
      this.books = this.getFilteredBooks();
      this.resultsLoading = false;
    }, this.delayDuration);
  }
}
