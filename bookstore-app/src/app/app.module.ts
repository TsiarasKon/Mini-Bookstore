import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { LayoutComponent } from './components/layout/layout.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';
import { AddBooksPageComponent } from './components/add-books-page/add-books-page.component';
import { UploadImageComponent } from './shared/components/upload-image/upload-image.component';
import { TagExtendableArrayComponent } from './shared/components/tag-extendable-array/tag-extendable-array.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';

import { BookService } from './services/book-service/book.service';
import { CartService } from './services/cart-service/cart.service';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        SearchPageComponent,
        NotFoundPageComponent,
        BookPreviewComponent,
        AddBooksPageComponent,
        UploadImageComponent,
        TagExtendableArrayComponent,
        BookDetailsPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzLayoutModule,
        NzMenuModule,
        NzBreadCrumbModule,
        NzIconModule,
        NzButtonModule,
        NzResultModule,
        NzCardModule,
        NzRateModule,
        NzFormModule,
        NzInputModule,
        NzInputNumberModule,
        NzSelectModule,
        NzDatePickerModule,
        NzUploadModule,
        NzTagModule,
        NzMessageModule,
        NzAvatarModule,
        NzCarouselModule,
        NzBadgeModule,
        NzSpinModule,
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }, BookService, NzMessageService, CartService],
    bootstrap: [AppComponent],
})
export class AppModule {}
