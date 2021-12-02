import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookList:any;
  genreList:any;
  authorsList:any;
  newBook:any[]=[];
  bookForm:any= FormGroup;
  successfull=true;
  searchBookRes:any[]=[];
  searchAlarm = true;
  searchResult = false;
  activationForm = true;
  editingBook:any;
  displayBooks = true;

  constructor(private libraryService:LibraryServiceService) { }

  getBookList(){
    this.libraryService.getBooks().subscribe(data =>{
      this.bookList = data
    })
  }
  getGenreList(){
    this.libraryService.getGenre().subscribe(data=>{
      this.genreList = data
    })
  }
  getAuthorList(){
    this.libraryService.getAuthor().subscribe(data=>{
      this.authorsList = data
    })
  }
  
  displayDiv(){
    if(this.displayBooks==true){
      this.displayBooks = false;
    }else this.displayBooks = true;
  }
  searchBook(searhBookField:string){
    this.searchBookRes.length=0;
    for(let i =0; i< this.bookList.length; i++){
      if(this.bookList[i].title == searhBookField){
        this.searchBookRes.push(this.bookList[i]);
        this.searchAlarm = true;
        this.searchResult = false;
      }
    }
    if (this.searchBookRes.length<=0){
      this.searchAlarm = false;
      this.searchResult = true;
    }
  }

  startEditBook( editBook:any, authorsField:any, bookField:any, genreField:any, pagesField:any){
    this.activationForm = false;
    this.bookForm.reset();
    this.editingBook = editBook;
    authorsField.value = editBook.author;
    bookField.value = editBook.title;
    genreField.value = editBook.genre;
    pagesField.value = editBook.pages;
  }
  finishEditBook(){
    this.activationForm = true;
    this.editingBook.author = this.bookForm.controls.surname.value.substring(2);
    this.editingBook.authorId = Number(this.bookForm.controls.surname.value.substring(0,1));
    this.editingBook.title = this.bookForm.controls.title.value;
    this.editingBook.genre = this.bookForm.controls.genre.value;
    this.editingBook.pages = this.bookForm.controls.pages.value;
    this.libraryService.editBook(this.editingBook).subscribe((res)=>{
      this.editingBook = null;
      this.getBookList();
    })
    this.bookForm.reset();
  }

  deleteBook(id:number){
    this.searchResult = true
    this.libraryService.deleteBook(id).subscribe(del=>{
      this.getBookList();
    })
    this.bookForm.reset();
  }



  ngOnInit(): void {
    this.bookForm = new FormGroup({
      surname: new FormControl(''),
      genre: new FormControl(''),
      title: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
      pages: new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)]),
    });
    this.getBookList();
    this.getGenreList();
    this.getAuthorList();
    
  }
  
}
