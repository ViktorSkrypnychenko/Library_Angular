import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author, Book, Genre } from './types';
import { Observable,of } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {

  httpOptions = {
    headers: new HttpHeaders({'Contenet-Type':'application/json'})
  };

  constructor(private http:HttpClient) { }

  // Author
  getAuthor(){
    return this.http.get<Author[]>('api/authors').pipe(catchError(this.handleError<Author[]>('getAuthor', [])))
  } 

  addAuthor( newSurname:string, newName:string, newBirth:string, newMiddlename?:string){
    return this.http.post<Author>('api/authors', {surname: newSurname, name:newName, birth:newBirth, middleName:newMiddlename}).pipe(catchError(this.handleError<Author>('addAuthor')))
  }

  editAuthor(editingAuthor:Author){
    return this.http.put<Author[]>(`api/authors/${editingAuthor.id}`, editingAuthor).pipe(catchError(this.handleError<Author>('editAuthor')))
  }

  deleteAuthor(id:number){
    return this.http.delete<Author[]>(`api/authors/${id}`).pipe(catchError(this.handleError<Author>('deleteAuthor')))
  }

  // Book
  getBooks(){
    return this.http.get<Book[]>('api/books').pipe(catchError(this.handleError<Book[]>('getBook', [])))
  }

  addBook(authorSurname:string, newTitle:string, newGenre:string, newPages:string, newAuthorId:number, newGenreId:number){
     return this.http.post<Book>('api/books',{author:authorSurname, title:newTitle, genre:newGenre, pages:newPages, authorId:newAuthorId, genreId:newGenreId}).pipe(catchError(this.handleError<Book>('addBook')))
  }

  deleteBook(id:number){
    return this.http.delete<Book[]>(`api/books/${id}`).pipe(catchError(this.handleError<Book>('deleteBook')))
  }

  editBook(book:Book){
    return this.http.put<Book[]>(`api/books/${book.id}`,book).pipe(catchError(this.handleError<Book>('editBook')))
  }

  // Genre
  getGenre(){
    return this.http.get<Genre[]>("api/genre").pipe(catchError(this.handleError<Genre[]>('getGenre', [])))
  }

  addGenre(newGenre:string){
     return this.http.post<Genre>('api/genre', {genre:newGenre}).pipe(catchError(this.handleError<Genre>('addHero')))
  }

  deleteGenre(id:number){
     return this.http.delete<Genre>(`api/genre/${id}`).pipe(catchError(this.handleError<Genre>('deleteGenre')))
  }

  editGenre(genre:Genre){
    return this.http.put<Genre[]>(`api/genre/${genre.id}`,genre).pipe(catchError(this.handleError<Genre>('editGenre')))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
       console.error(error); 
       console.log(`${operation} failed: ${error.message}`);
       return of(result as T);
    };
  }  
}
