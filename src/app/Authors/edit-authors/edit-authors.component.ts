import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import {Author,Book,Genre} from 'src/app/types';

@Component({
  selector: 'app-edit-authors',
  templateUrl: './edit-authors.component.html',
  styleUrls: ['./edit-authors.component.css']
})
export class EditAuthorsComponent implements OnInit {
  authorList:Author[]=[];
  activationForm:boolean = true;
  searchAuthorDiv:boolean = true;
  searchAlarm:boolean = true
  displayAuthors:boolean = true;
  searchResult:boolean = false;
  searchAuthorRes:Author[]=[];
  authorForm!:FormGroup;
  editingAuthor:Author[]=[];
  newEditAuthor:Author[]=[];
  genreList:Genre[]=[];
  bookList:Book[]=[];

  constructor(private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.authorForm = new FormGroup({
      surname: new FormControl(null,[Validators.pattern(/[A-Za-z]/)]),
      name: new FormControl(null,[Validators.pattern(/[A-Za-z]/)]),
      middleName: new FormControl(null,Validators.pattern(/[A-Za-z]/)),
      birth : new FormControl(null,[Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/)]),
    });
    this.getAuthorList();
    this.getBookList();
  }

  getAuthorList(){
    this.libraryService.getAuthor().subscribe(data => {
      this.authorList = data;
      this.authorList.sort((a: any,b: any)=>a.surname.localeCompare(b.surname));
    })
  }

  getBookList(){
    this.libraryService.getBooks().subscribe(data =>{
      this.bookList = data
    })
  }
    
  displayDiv(){
    if(this.displayAuthors==true){
      this.displayAuthors = false;
    }else this.displayAuthors = true;
  }
  
  searchAuthor(searhAuthorField:string){
    this.searchAuthorRes.length = 0;  
    for (let i = 0; i < this.authorList.length; i++) {
      if (this.authorList[i].surname == searhAuthorField ){
        this.searchAuthorRes.push(this.authorList[i]);
        this.searchAlarm= true;
        this.searchResult=false; 
      } 
    }
    if(this.searchAuthorRes.length<=0){  
      this.searchAlarm = false;
      this.searchResult = true;
    }
  }

  startEditAuthor(editAuthor:Author, surnameField:{value:string}, nameField:{value:string}, birthField:{value:string}, middleNameField?:{value:string}){
    this.activationForm=false;
    this.authorForm.reset();
    this.editingAuthor.push(editAuthor);
    surnameField.value = editAuthor.surname;
    nameField.value= editAuthor.name;
    birthField.value = editAuthor.birth;
    if (middleNameField!=undefined){
      middleNameField.value = editAuthor.middleName;
    }
  }
  
  deleteAuthor(id:number){
    this.searchResult = true
    this.libraryService.deleteAuthor(id).subscribe(del=>{
      this.getAuthorList()
    })
    this.authorForm.reset();
  }

  finishEditAuthor(){
    this.activationForm = true;
    if(this.authorForm.value.surname){
      this.editingAuthor[0].surname = this.authorForm.value.surname;
    }
    if(this.authorForm.value.name){
      this.editingAuthor[0].name = this.authorForm.value.name;
    }
    if(this.authorForm.value.birth){
      this.editingAuthor[0].birth = this.authorForm.value.birth;
    }
    if(this.authorForm.value.middleName){
      this.editingAuthor[0].middleName = this.authorForm.value.middleName;
    }
    this.libraryService.editAuthor(this.editingAuthor[0]).subscribe((res)=>{
      this.getAuthorList();
    })
    this.bookList.forEach((el:any) => {
      if(el.author!=this.editingAuthor[0].surname && el.authorId==this.editingAuthor[0].id){
         el.author = this.editingAuthor[0].surname;
         this.libraryService.editBook(el).subscribe()
      }
    });
    this.getBookList();
    this.authorForm.reset();
  }

}
