import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import {Genre,Book} from 'src/app/types';

@Component({
  selector: 'app-edit-genres',
  templateUrl: './edit-genres.component.html',
  styleUrls: ['./edit-genres.component.css']
})
export class EditGenresComponent implements OnInit {

  genreList:Genre[]=[];
  successfull:boolean =true;
  searchResult:boolean = true;
  searchResGenre:Genre[]=[];
  bookList:Book[]=[];
  search:boolean = false;
  delete:boolean = true;
  success:boolean = true;
  delSuccess:boolean=true;
  addGenreForm!: FormGroup;

  constructor(private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.addGenreForm = new FormGroup({
      newGenre: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)])
    });
    this.getGenre();
    this.getBookList();
  }

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
    this.delSuccess = true;
    this.success = true;
    this.searchResult = false;
    for (let i = 0; i < this.genreList.length; i++) {
      this.searchResGenre.length = 0
      if (this.genreList[i].genre == this.addGenreForm.value.newGenre){
        this.searchResGenre.push(this.genreList[i])
        this.search=true;
        this.delete=false;
        break 
      }
    }
    if (this.searchResGenre.length<=0){
      this.searchResGenre.push({id:1,genre:"There is no this genre"});
      this.search=false;
      this.delete=true;
      this.addGenreForm.reset();
    } 
  }

  finishEditingGenre(){
    this.searchResGenre[0].genre = this.addGenreForm.value.newGenre;
    this.libraryService.editGenre(this.searchResGenre[0]).subscribe();
    this.bookList.forEach((el:any) => {
      if(el.genre!=this.searchResGenre[0].genre && el.genreId==this.searchResGenre[0].id){
         el.genre = this.searchResGenre[0].genre;
         this.libraryService.editBook(el).subscribe();
      }
    });
    this.addGenreForm.reset();
    this.delete = true;
    this.search = false;
    this.success=false;
    this.searchResult = true;
  }

  deleteGenre(id: number){
    this.libraryService.deleteGenre(id).subscribe();
    this.delete = true;
    this.search = false;
    this.searchResult = true;
    this.success = true;
    this.delSuccess = false;
    this.addGenreForm.reset();
  }

}
