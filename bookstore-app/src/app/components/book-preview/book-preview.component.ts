import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/types';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent {
  @Input() book: IBook;
}
