import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { LayoutComponent } from './components/layout/layout.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { BookService } from './services/book-service/book.service';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        SearchPageComponent,
        NotFoundPageComponent,
        BookPreviewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
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
    ],
    providers: [{ provide: NZ_I18N, useValue: en_US }, BookService],
    bootstrap: [AppComponent],
})
export class AppModule { }
