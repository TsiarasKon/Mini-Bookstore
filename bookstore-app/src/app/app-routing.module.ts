import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBooksPageComponent } from './components/add-books-page/add-books-page.component';
import { BookDetailsPageComponent } from './components/book-details-page/book-details-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';

const routes: Routes = [
  { path: 'search', component: SearchPageComponent },
  { path: 'add', component: AddBooksPageComponent },
  { path: 'book/:id', component: BookDetailsPageComponent },
  { path: '', component: SearchPageComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
