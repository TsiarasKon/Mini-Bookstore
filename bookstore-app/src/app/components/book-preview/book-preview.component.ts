import { Component, Input } from '@angular/core';
import { IBook } from 'src/app/shared/types';

@Component({
  selector: 'book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent {
  @Input() book: IBook;
}
