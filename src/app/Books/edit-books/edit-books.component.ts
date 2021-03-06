import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { Book,Genre,Author } from 'src/app/types';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {
  bookList:Book[]=[];
  genreList:Genre[]=[];
  authorsList:Author[]=[];
  newBook:Book[]=[];
  bookForm!:FormGroup;
  successfull=true;
  searchBookRes:Book[]=[];
  searchAlarm:boolean = true;
  searchResult:boolean = false;
  activationForm:boolean = true;
  editingBook:Book[]=[];
  displayBooks:boolean = true;

  constructor(private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      surname: new FormControl(null,[Validators.pattern(/[A-Za-z]/)]),
      genre: new FormControl(null,[Validators.pattern(/[A-Za-z]/)]),
      title: new FormControl(null,[Validators.pattern(/[A-Za-z]/)]),
      pages: new FormControl(null,[Validators.pattern(/^\d+$/)]),
    });
    this.getBookList();
    this.getGenreList();
    this.getAuthorList();
  }

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

  startEditBook( editBook:Book, authorsField:{value: string;}, bookField: {value: string;}, genreField:{value: string;}, pagesField:{value: string;}){
    this.activationForm = false;
    this.bookForm.reset();
    this.editingBook.push(editBook);
    authorsField.value = editBook.authorId+" "+ editBook.author;
    bookField.value = editBook.title;
    genreField.value = editBook.genre;
    pagesField.value = editBook.pages;
  }

  finishEditBook(){
    this.activationForm = true;
    if(this.bookForm.value.surname){
      this.editingBook[0].author = this.bookForm.value.surname.substring(2);
      this.editingBook[0].authorId = Number(this.bookForm.value.surname.substring(0,1));
    }
    if(this.bookForm.value.title){
      this.editingBook[0].title = this.bookForm.value.title;
    }
    if(this.bookForm.value.genre){
      this.editingBook[0].genre = this.bookForm.value.genre;
    }
    if(this.bookForm.value.pages){
      this.editingBook[0].pages = this.bookForm.value.pages;
    }
    this.libraryService.editBook(this.editingBook[0]).subscribe()
    this.bookForm.reset();
  }

  deleteBook(id:number){
    this.searchResult = true
    this.libraryService.deleteBook(id).subscribe(del=>{
      this.getBookList();
    })
    this.bookForm.reset();
  }

}
