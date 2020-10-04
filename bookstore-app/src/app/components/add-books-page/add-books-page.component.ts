import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BookService } from 'src/app/services/book-service/book.service';
import { IBook } from 'src/app/shared/types';

@Component({
    selector: 'app-add-books-page',
    templateUrl: './add-books-page.component.html',
    styleUrls: ['./add-books-page.component.css', '../../app.component.css'],
})
export class AddBooksPageComponent implements OnInit {
    constructor(
        private bookService: BookService,
        private fb: FormBuilder,
        private router: Router,
        private message: NzMessageService
    ) {}

    addForm!: FormGroup;
    imageUri: string;

    categoriesOptions: Array<{ label: string; value: string }> = [];

    ngOnInit(): void {
        this.initializeForm();
        this.categoriesOptions = this.bookService.getCategories().map((el) => ({ label: el, value: el }));
    }

    initializeForm(): void {
        this.addForm = this.fb.group({
            title: [
                '',
                [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(120),
                    Validators.pattern('^[a-zA-Z0-9@"#&*! ]+$'),
                ], // regex for only allowing alphanumeric characters, space, and @"#&*!
            ],
            description: [
                '',
                [Validators.required, Validators.maxLength(512), Validators.pattern('^[A-Z].*')], // regex for starting with an uppercase letter
            ],
            categories: [[], [Validators.required, Validators.maxLength(4)]],
            authors: [[], [Validators.required, Validators.maxLength(3)]],
            publisher: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
            publishedYear: [null, [Validators.required]],
            pages: [
                null,
                [Validators.required, Validators.min(0), Validators.max(9999), Validators.pattern('^[0-9]*$')],
            ],
            rating: [
                '',
                [Validators.required, Validators.min(0), Validators.max(5), Validators.pattern('^[0-9]*(.5)?$')],
            ],
            isbn10: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
            isbn13: ['', [Validators.required, Validators.pattern('^[0-9]{13}$')]],
        });
    }

    onImageUpload(imgBase64: string) {
        this.imageUri = imgBase64;
    }

    updateAuthors(authorsArray: string[]): void {
        this.addForm.controls.authors.patchValue(authorsArray);
    }

    submitForm(): void {
        for (const i in this.addForm.controls) {
            this.addForm.controls[i].markAsDirty();
            this.addForm.controls[i].markAsTouched();
            this.addForm.controls[i].updateValueAndValidity();
        }
        if (this.addForm.valid) {
            const {
                title,
                description,
                categories,
                authors,
                publisher,
                publishedYear,
                pages,
                rating,
                isbn10,
                isbn13,
            } = this.addForm.controls;
            const newBook: IBook = {
                isbn13: isbn13.value,
                isbn10: isbn10.value,
                title: title.value,
                authors: authors.value,
                publishedYear: publishedYear.value.getFullYear(),
                publisher: publisher.value,
                pages: pages.value,
                description: description.value,
                imageURI: this.imageUri,
                categories: categories.value,
                rating: rating.value,
            };
            this.bookService.postBook(newBook);
            this.router.navigate(['/']); // redirect after book creation
            this.message.success(`Book '${newBook.title}' added successfully!`);
        }
    }
}
