import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authorList:any;
  activationForm = true;
  searchAuthorDiv = true;
  searchAlarm = true
  displayAuthors = true;
  searchResult = false;
  searchAuthorRes:any[]=[];
  authorForm:any = FormGroup;
  editingAuthor:any
  newEditAuthor:any;
  genreList:any;
  bookList:any;
 
  
  constructor(private libraryService:LibraryServiceService) { }

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

  startEditAuthor(editAuthor:any, surnameField:any, nameField:any, birthField:any, middleNameField?:any){
    this.activationForm=false;
    this.authorForm.reset();
    this.editingAuthor = editAuthor;
    surnameField.value = editAuthor.surname;
    nameField.value= editAuthor.name;
    birthField.value = editAuthor.birth;
    if (editAuthor.middleName){
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
    this.editingAuthor.surname = this.authorForm.controls.surname.value;
    this.editingAuthor.name = this.authorForm.controls.name.value;
    this.editingAuthor.birth = this.authorForm.controls.birth.value;
    if(this.authorForm.controls.middleName){
      this.editingAuthor.middleName = this.authorForm.controls.middleName.value;
    }
    this.libraryService.editAuthor(this.editingAuthor).subscribe((res)=>{
      this.editingAuthor =null;
      this.getAuthorList();
    })
    this.bookList.forEach((el:any) => {
      if(el.author!=this.editingAuthor.surname && el.authorId==this.editingAuthor.id){
         el.author = this.editingAuthor.surname;
         this.libraryService.editBook(el).subscribe((res)=>{
          console.log(res);
        })
      }
    });
    this.getBookList();
    this.authorForm.reset();
  }
 
  ngOnInit(): void {
    this.authorForm = new FormGroup({
      surname: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
      name: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
      middleName: new FormControl(null,Validators.pattern(/[A-Za-z]/)),
      birth : new FormControl('',[Validators.required,Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/)]),
    });
    this.getAuthorList();
    this.getBookList();
  }
}
