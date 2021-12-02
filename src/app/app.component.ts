import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from './library-service.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;
//   title = 'Library';
//   authorList: any;
//   editingAuthor:any;
//   bookList:any;
//   genreList:any;
//   searchRes:any;
//   editingBook:any;
//   authorForm:any = FormGroup;
//   addBookForm:any=FormGroup;
//   addGenreForm:any = FormGroup;

//   constructor(private libraryService:LibraryServiceService){}
  
//   // Author 
//   getAuthorTasks(){
//     this.libraryService.getAuthor().subscribe(data => {
//         this.authorList = data;
//         this.authorList.sort((a: any,b: any)=>a.surname.localeCompare(b.surname));
//        })
//   }

//   addAuthor(newSurname: any, newName:any, newBirth:any, newMiddleName?:any){
//     this.libraryService.addAuthor(newSurname, newName, newBirth, newMiddleName).subscribe(data => {
//       this.authorList.push(data);
//       })
//       this.authorForm.reset();
//   }

//   deleteAuthor(id: any){
//     this.libraryService.deleteAuthor(id).subscribe(del=>{
//         this.getAuthorTasks()
//     })
//   }

//   startEditAuthor(author:any, surnameField:any, nameField:any, birthField:any, middleNameField?:any){
//     this.editingAuthor = author;
//     surnameField.value = author.surname;
//     nameField.value = author.name;
//     birthField.value = author.birth;
//     if (middleNameField){
//       middleNameField.value = author.middleNameField;
//     }
//     const inputAuthor = document.getElementById("inputAuthor");
//     if(inputAuthor!=null){
//       inputAuthor.hidden = true;
//     }
    
//   }
//   finishEditAuthor(newSurname:any, newName:any, newBirth:any, newMiddleName?:any){
//     this.editingAuthor.surname = newSurname;
//     this.editingAuthor.name = newName;
//     this.editingAuthor.birth = newBirth;
//     if(newMiddleName){
//       this.editingAuthor.middleName = newMiddleName;
//     }
//     this.libraryService.editAuthor(this.editingAuthor).subscribe(res=>{
//         this.editingAuthor =null;
//     })
//     const inputAuthor = document.getElementById("inputAuthor");
//     if(inputAuthor!=null){
//       inputAuthor.hidden = false;
//     }
//     this.authorForm.reset();
//   }

// // book
//   getBookTasks(){
//     this.libraryService.getBooks().subscribe(data =>{
//       this.bookList = data
//     })
//   }
  
//   displayBooks(newSurname:any){
//     const showMyBook = document.getElementById('showMyBook');
//     if(showMyBook!=null ) { 
//       showMyBook.innerText = ""
//       this.bookList.forEach((element: any) => {
//         if (element.surname == newSurname){
//            showMyBook.innerHTML += `
//                  <div>
//                  Title: ${element.name}, genre: ${element.genre}, pages: ${element.pages}
//                  </div>
//                `
//           }
//       });
//     }
//   }

//   addBook(mySurname:any, newName:any, newGenre:any, newPages:any){
//     const showMyBook = document.getElementById('showMyBook');
//     if(showMyBook!=null ) { 
//       showMyBook.innerText = ""
//     }
//      this.libraryService.addBook(mySurname,newName,newGenre,newPages ).subscribe(data=>{
//        this.bookList.push(data);
//       })
//   }
  
//   searchBook(myName: any){
//     this.searchRes=undefined
//     const searchBookAlarm = document.getElementById('searchBookAlarm');
//     if (searchBookAlarm!=null){
//        searchBookAlarm.innerHTML="";
//     }
//     for (let i = 0; i < this.bookList.length; i++) {
//         if (this.bookList[i].name == myName ){
//             this.searchRes = this.bookList[i]
//         } 
//       }
//     if(this.searchRes){       
//       if (searchBookAlarm!=null){
//         searchBookAlarm.innerHTML="";
//         searchBookAlarm.innerHTML = `
//         <div>
//         ${this.searchRes.surname}, ${this.searchRes.name}, ${this.searchRes.genre}, ${this.searchRes.pages}
//         </div>
//       `
//       }
//     }else {
//        if (searchBookAlarm!=null){
//           searchBookAlarm.innerHTML="";
//           searchBookAlarm.innerHTML="There is no book with that title";
//       }
//     }
//   }

//   deleteBook(id:any){
//     const searchBookAlarm = document.getElementById('searchBookAlarm');
//     this.libraryService.deleteBook(id).subscribe(del=>{
//       this.getBookTasks()
//       })
//     if (searchBookAlarm!=null){
//        searchBookAlarm.innerHTML="";
//       }
//     const showMyBook = document.getElementById('showMyBook');
//     if(showMyBook!=null ) { 
//       showMyBook.innerText = ""
//       }
//   }

// startEditBook(book:any,authorsField:any,bookField:any, genreField:any, pagesField:any, searchBookField:any){
//   this.editingBook = book;
//   authorsField.value = book.surname;
//   bookField.value= book.name;
//   genreField.value = book.genre;
//   pagesField.value = book.pages;
//   searchBookField.value = "";
// }
// finishEditBook(newSurname:any, newName:any, newGenre:any, newPages:any){
//   this.editingBook.surname = newSurname;
//   this.editingBook.name = newName;
//   this.editingBook.genre = newGenre;
//   this.editingBook.pages = newPages;
//   this.libraryService.editBook(this.editingBook).subscribe(res=>{
//     this.editingBook = null
//   })
// }

// // genre
//   getGenre(){
//       this.libraryService.getGenre().subscribe(data=>{
//         this.genreList = data;
//         this.genreList.sort((a: any,b: any)=>a.genre.localeCompare(b.genre));
//       })
//   }
//   addGenre(myGenre: any){
//     let chekin = true;
//     const alarmSearchGenre = document.getElementById('alarmSearchGenre')
//     for (let i = 0; i < this.genreList.length; i++) {
//       if (this.genreList[i].genre == myGenre ){
//         chekin = false;
//         if (alarmSearchGenre!=null){
//           alarmSearchGenre.innerHTML="Such a genre exists!";
//        } this.addGenreForm.reset(); break
//       }
//     }
//     if(chekin == true){
//     this.libraryService.addGenre(myGenre).subscribe(data=>{
//         this.genreList.push(data)
//        this.getGenre();
//     })
//     }
//     this.addGenreForm.reset();
//   }

//   searchGenre(myGenre: any){
//     this.searchRes=undefined
//     const alarmSearchGenre = document.getElementById('alarmSearchGenre');
//     if (alarmSearchGenre!=null){
//       alarmSearchGenre.innerHTML="";
//     }
//     for (let i = 0; i < this.genreList.length; i++) {
//         if (this.genreList[i].genre == myGenre ){
//             this.searchRes = this.genreList[i]
//         } 
//       }
//     if(this.searchRes){       
//       if (alarmSearchGenre!=null){
//         alarmSearchGenre.innerHTML="";
//         alarmSearchGenre.innerHTML = `
//         <div>
//         ${this.searchRes.genre}
//         </div>
//       `
//       }
//   }else {
//     if (alarmSearchGenre!=null){
//       alarmSearchGenre.innerHTML="";
//       alarmSearchGenre.innerHTML="There is no this genre";
//     }
//   }
// }

// deleteGenre(id:any){
//     const alarmSearchGenre = document.getElementById('alarmSearchGenre');
//     if (alarmSearchGenre!=null){
//        alarmSearchGenre.innerHTML="";
//       }
//     this.libraryService.deleteGenre(id).subscribe(del=>{
//        this.getGenre()
//       })
//     this.addGenreForm.reset();
//   }

//   // validation
//   ngOnInit(): void {
//     this.authorForm = new FormGroup({
//       surname: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
//       name: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
//       middleName: new FormControl(null,Validators.pattern(/[A-Za-z]/)),
//       birth : new FormControl('',[Validators.required,Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/)]),
//     });
//     this.addBookForm = new FormGroup({
//       title: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
//       pages: new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)]),
//     });
//     this.addGenreForm = new FormGroup({
//       newGenre: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)])
//     })

//     this.getAuthorTasks()
//     this.getBookTasks()
//     this.getGenre()
//   }
ngOnInit(): void {}
}
