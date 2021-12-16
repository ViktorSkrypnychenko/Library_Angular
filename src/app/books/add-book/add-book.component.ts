import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Book,Genre,Author } from 'src/app/genre-book-author';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})

export class AddBookComponent implements OnInit {
  
  bookList:Book[]=[];
  genreList:Genre[]=[];
  authorsList:Author[]=[];
  newBook:Book[]=[];
  addBookForm!:FormGroup;
  successfull:boolean=true;

  constructor(private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.addBookForm = new FormGroup({
            surname: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
            genre: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
            title: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
            pages: new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)]),
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
  
  addBook(){
    this.newBook.push(this.addBookForm.value);
    this.newBook[0].authorId = Number(this.addBookForm.value.surname.replace(/[^0-9]/g, ''));
    this.newBook[0].author = this.addBookForm.value.surname.replace(/[^a-zа-яё]/gi, '');
    this.newBook[0].genreId = Number(this.addBookForm.value.genre.replace(/[^0-9]/g, ''));
    this.newBook[0].genre = this.addBookForm.value.genre.replace(/[^a-zа-яё]/gi, '');
    this.libraryService.addBook(this.newBook[0].author, this.newBook[0].title, this.newBook[0].genre, this.newBook[0].pages,this.newBook[0].authorId, this.newBook[0].genreId).subscribe(data=>{
      this.bookList.push(data);
      this.successfull=false
    })
    this.addBookForm.reset();
    this.newBook.length = 0;
  }

}
