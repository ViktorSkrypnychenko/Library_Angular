import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LibraryComponent } from './library/library.component';
import { booksRoute } from './books/routs';
import { genreRoute } from './genres/routs';
import { authorRoute } from './library/routs';


const routes: Routes = [
  {path:"", component:LibraryComponent},
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
