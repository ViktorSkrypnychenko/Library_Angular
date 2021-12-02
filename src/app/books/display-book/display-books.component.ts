import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.css']
})
export class DisplayBooksComponent implements OnInit {
   
  booksList:any;
  

  constructor(private libraryService:LibraryServiceService) { }

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

  ngOnInit(): void {
    this.getBooksList();
  }

}
