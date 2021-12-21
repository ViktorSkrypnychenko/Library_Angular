import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAuthorsComponent } from './Authors/add-authors/add-authors.component';
import { EditAuthorsComponent } from './Authors/edit-authors/edit-authors.component';
import { DisplayAuthorsComponent } from './Authors/display-authors/display-authors.component';
import { AddBooksComponent } from './Books/add-books/add-books.component';
import { EditBooksComponent } from './Books/edit-books/edit-books.component';
import { DisplayBooksComponent } from './Books/display-books/display-books.component';
import { AddGenresComponent } from './Genres/add-genres/add-genres.component';
import { EditGenresComponent } from './Genres/edit-genres/edit-genres.component';
import { DisplayGenresComponent } from './Genres/display-genres/display-genres.component';
import { BackendServiceService } from './backend-service.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAuthorsComponent,
    EditAuthorsComponent,
    DisplayAuthorsComponent,
    AddBooksComponent,
    EditBooksComponent,
    DisplayBooksComponent,
    AddGenresComponent,
    EditGenresComponent,
    DisplayGenresComponent,
    Page404Component
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
