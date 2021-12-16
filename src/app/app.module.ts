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
import { AddBookComponent } from './books/add-book/add-book.component';
import { EditBookComponent } from './books/edit-book/edit-book.component';
import { DisplayBooksComponent } from './books/display-books/display-books.component';
import { AddGenreComponent } from './genres/add-genre/add-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { DisplayGenresComponent } from './genres/display-genres/display-genres.component';
import { AddAuthorComponent } from './authors/add-author/add-author.component';
import { EditAuthorComponent } from './authors/edit-author/edit-author.component';
import { DisplayAuthorsComponent } from './authors/display-authors/display-authors.component';

@NgModule({
  declarations: [
    AppComponent,

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
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(BackendServiceService),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
