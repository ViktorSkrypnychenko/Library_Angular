import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { BackendServiceService } from './backend-service.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './books/books.component';
import { GenresComponent } from './genres/genres.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { DisplayBooksComponent } from './books/display-books/display-books.component';
// import { BooksModule } from './books/books.module';
import { AddGenreComponent } from './genres/add-genre/add-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { DisplayGenresComponent } from './genres/display-genres/display-genres.component';
// import { GenreModule } from './genres/genre.module';
import { AddAuthorComponent } from './library/add-author/add-author.component';
import { EditAuthorComponent } from './library/edit-author/edit-author.component';
import { DisplayAuthorsComponent } from './library/display-authors/display-authors.component';
// import { authorModule } from './library/author.module';

@NgModule({
  declarations: [
    AppComponent,
    
    LibraryComponent,
    BooksComponent,
    GenresComponent,
    AddBookComponent,
    EditBookComponent,
    DisplayBooksComponent,
   
    AddGenreComponent,
    EditGenreComponent,
    DisplayGenresComponent,
    
    AddAuthorComponent,
    EditAuthorComponent,
    DisplayAuthorsComponent,
    
  ],
  imports: [
    // authorModule,
    // GenreModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // BooksModule,
    InMemoryWebApiModule.forRoot(BackendServiceService),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
