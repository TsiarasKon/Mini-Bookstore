import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { BookService } from 'src/app/services/book-service/book.service';

@Component({
  selector: 'app-add-books-page',
  templateUrl: './add-books-page.component.html',
  styleUrls: ['./add-books-page.component.css', '../../app.component.css']
})
export class AddBooksPageComponent implements OnInit {

  constructor(private bookService: BookService, private fb: FormBuilder, private msg: NzMessageService) { }

  addForm!: FormGroup;
  imageUri: string;

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(120)]],
      userEmail: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required]],
      categories: [[], [Validators.required]],
      author: ['', [Validators.required]],
      publisher: ['', [Validators.required]],
      published: ['', [Validators.required]],
      pages: [null, [Validators.required]],
      rating: ['', []],
      isbn10: ['', [Validators.required]],
      isbn: ['', [Validators.required]],
    });
  }

  onImageUpload(imgBase64: string) {
    this.imageUri = imgBase64;
  }

  submitForm(): void {
    // TODO: construct IBook
    // this.bookService.postBook(newBook);
    for (const i in this.addForm.controls) {
      this.addForm.controls[i].markAsDirty();
      this.addForm.controls[i].updateValueAndValidity();
    }
    console.log(this.addForm.controls)
    console.log(this.imageUri)
  }

  // For image upload:

}
