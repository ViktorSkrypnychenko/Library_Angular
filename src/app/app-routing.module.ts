import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { booksRoute } from './books/routs';
import { genreRoute } from './genres/routs';
import { authorRoute } from './authors/routs';


const routes: Routes = [
  ...booksRoute,
  ...genreRoute,
  ...authorRoute
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
