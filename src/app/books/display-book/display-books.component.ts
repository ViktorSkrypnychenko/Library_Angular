import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { Book } from 'src/app/genre-book-author';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})

export class DisplayBooksComponent implements OnInit {
   
  booksList:Book[]=[];
  
  constructor(private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(){
    this.libraryService.getBooks().subscribe(data=>{
      this.booksList = data;
    })
  }

  sortingAZ = () =>{
    return this.booksList.sort((a: any,b: any)=>a.title.localeCompare(b.title));
  }

  sortingAuthor = () =>{
    return this.booksList.sort((a: any,b: any)=>a.author.localeCompare(b.author));
  }

  sortingGenre = () =>{
    return this.booksList.sort((a: any,b: any)=>a.genre.localeCompare(b.genre));
  }

}
