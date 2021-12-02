import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  genreList:any;
  addGenreForm:any=FormGroup;
  alarmGenre:any={};
  successfull=true;
  searchResult = true;
  searchResGenre:any[]=[];
  bookList:any;
  search=false;
  delete=true;
  success = true;

  constructor(private libraryService:LibraryServiceService) { }

  getGenre(){
    this.libraryService.getGenre().subscribe(data=>{
      this.genreList = data;
    })
  }
  getBookList(){
    this.libraryService.getBooks().subscribe(data =>{
      this.bookList = data
    })
  }

  searchGenre(){
    this.success = true
    this.searchResult = false
    for (let i = 0; i < this.genreList.length; i++) {
      this.searchResGenre.length = 0
      if (this.genreList[i].genre == this.addGenreForm.controls.newGenre.value ){
        this.searchResGenre.push(this.genreList[i])
        this.search=true;
        this.delete=false;
        break 
      }
    }
    if (this.searchResGenre.length<=0){
      
      this.alarmGenre = {genre:"There is no this genre"};
      this.searchResGenre.push(this.alarmGenre);
      this.search=false;
      this.delete=true;
      this.addGenreForm.reset();
    } 
  }

  finishEditingGenre(){
    this.searchResGenre[0].genre = this.addGenreForm.controls.newGenre.value
    this.libraryService.editGenre(this.searchResGenre[0]).subscribe(data=>{
      this.getGenre();
     })
    this.bookList.forEach((el:any) => {
      if(el.genre!=this.searchResGenre[0].genre && el.genreId==this.searchResGenre[0].id){
         el.genre = this.searchResGenre[0].genre;
         this.libraryService.editBook(el).subscribe((res)=>{
        })
      }
      this.getBookList();
     });
    this.addGenreForm.reset();
    this.delete = true;
    this.search = false;
    this.success=false;
    this.searchResult = true;
  }

  deleteGenre(id: any){
    this.libraryService.deleteGenre(id).subscribe(del=>{
      this.getBookList();
    })
  }

  ngOnInit(): void {
    this.addGenreForm = new FormGroup({
      newGenre: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)])
    });
    this.getGenre();
    this.getBookList();
  }

}
