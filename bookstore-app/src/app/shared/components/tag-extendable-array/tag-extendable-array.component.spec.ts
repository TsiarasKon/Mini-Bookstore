/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TagExtendableArrayComponent } from './tag-extendable-array.component';

describe('TagExtendableArrayComponent', () => {
    let component: TagExtendableArrayComponent;
    let fixture: ComponentFixture<TagExtendableArrayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TagExtendableArrayComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagExtendableArrayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
