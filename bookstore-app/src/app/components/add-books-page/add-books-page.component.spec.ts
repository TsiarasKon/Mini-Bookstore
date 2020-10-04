/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddBooksPageComponent } from './add-books-page.component';

describe('AddBooksPageComponent', () => {
    let component: AddBooksPageComponent;
    let fixture: ComponentFixture<AddBooksPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddBooksPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddBooksPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
