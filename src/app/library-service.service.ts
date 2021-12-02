import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LibraryServiceService{
    
    constructor(private http: HttpClient) { }

    getAuthor(){
      return this.http.get('api/authors')
    }
    addAuthor( newSurname:string, newName:string, newBirth:any, newMiddlename?:string){
      return this.http.post('api/authors', {surname: newSurname, name:newName, birth:newBirth, middleName:newMiddlename})
    }
    editAuthor(editingAuthor:any){
      return this.http.put(`api/authors/${editingAuthor.id}`, editingAuthor)
    }
    
    deleteAuthor(id: number){
      return this.http.delete(`api/authors/${id}`)
    }

    getBooks(){
      return this.http.get('api/books')
    }
    addBook(authorSurname:string, newTitle:string, newGenre:string, newPages:number, newAuthorId:number, newGenreId:number){
       return this.http.post('api/books',{author:authorSurname, title:newTitle, genre:newGenre, pages:newPages, authorId:newAuthorId, genreId:newGenreId} )
    }
    deleteBook(id:number){
      return this.http.delete(`api/books/${id}`)
    }
    editBook(book:any){
      return this.http.put(`api/books/${book.id}`,book)
    }

    getGenre(){
      return this.http.get("api/genre")
    }
    addGenre(newGenre:string){
       return this.http.post('api/genre', {genre:newGenre})
    }
    deleteGenre(id:number){
       return this.http.delete(`api/genre/${id}`)
    }
    editGenre(genre:any){
      return this.http.put(`api/genre/${genre.id}`,genre)
    }

}







