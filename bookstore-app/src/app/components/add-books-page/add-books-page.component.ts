import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BookService } from 'src/app/services/book-service/book.service';
import { TestCategories } from 'src/app/test-data/misc';

@Component({
  selector: 'app-add-books-page',
  templateUrl: './add-books-page.component.html',
  styleUrls: ['./add-books-page.component.css', '../../app.component.css']
})
export class AddBooksPageComponent implements OnInit {

  constructor(private bookService: BookService, private fb: FormBuilder, private msg: NzMessageService) { }

  addForm!: FormGroup;
  imageUri: string;

  categoriesOptions: Array<{ label: string; value: string }> = [];

  ngOnInit(): void {
    this.initializeForm();
    this.categoriesOptions = this.bookService.getCategories().map(el => ({ label: el, value: el }));
  }

  initializeForm(): void {
    this.addForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(120),
        Validators.pattern('^[a-zA-Z0-9@"#&*! ]+$')]    // regex for only allowing alphanumeric characters, space, and @"#&*!
      ],
      description: ['', [
        Validators.required,
        Validators.maxLength(512),
        Validators.pattern('^[A-Z].*')]     // regex for starting with an uppercase letter
      ],
      categories: [[], [Validators.required, Validators.maxLength(4)]],
      author: [[], [Validators.required, Validators.maxLength(3)]],
      publisher: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ]],
      published: [null, [Validators.required]],
      pages: [null, [Validators.required, Validators.min(0), Validators.max(9999)]],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(5)]],
      isbn10: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      isbn: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
    });
  }

  isFormValid(): boolean {
    console.log(this.addForm.valid);
    return this.addForm.valid;
  }

  onImageUpload(imgBase64: string) {
    this.imageUri = imgBase64;
  }

  updateAuthors(authorsArray: string[]): void {
    this.addForm.controls.author.patchValue(authorsArray);
  }

  submitForm(): void {
    // TODO: construct IBook
    // this.bookService.postBook(newBook);
    console.log(this.addForm.valid);
    console.log(this.addForm);
    for (const i in this.addForm.controls) {
      this.addForm.controls[i].markAsDirty();
      this.addForm.controls[i].markAsTouched();
      this.addForm.controls[i].updateValueAndValidity();
    }
    console.log(this.addForm.controls)
    console.log(this.imageUri)
  }

}
