import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';

@Component({
  selector: 'app-display-authors',
  templateUrl: './display-authors.component.html',
  styleUrls: ['./display-authors.component.css']
})
export class DisplayAuthorsComponent implements OnInit {

  authorsList:any;
  displayAuthorBooks:any[]=[];
  displayBooksDiv = true;
  booksList:any;

  constructor(private libraryService:LibraryServiceService) { }
  
  getAuthorsList(){
    this.libraryService.getAuthor().subscribe(data => {
      this.authorsList = data;
      this.authorsList.sort((a: any,b: any)=>a.surname.localeCompare(b.surname));
    })
  }
  
  getBooksList(){
    this.libraryService.getBooks().subscribe(data=>{
      this.booksList = data;
    })
  }
  
  displayBooks(id:number){
    this.displayAuthorBooks.length = 0;
    this.displayBooksDiv = false;
    this.booksList.forEach((element: any)=>{
      if (element.authorId == id){
        this.displayAuthorBooks.push(element)
      }
    });
  }

  ngOnInit(): void {
    this.getAuthorsList();
    this.getBooksList();
  }

}


