import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { Genre } from 'src/app/types';

@Component({
  selector: 'app-add-genres',
  templateUrl: './add-genres.component.html',
  styleUrls: ['./add-genres.component.css']
})
export class AddGenresComponent implements OnInit {

  genreList:Genre[]=[];
  addGenreForm!:FormGroup;
  alarmSearchGenreDiv:boolean = true;
  successfull:boolean=true;

  constructor( private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.addGenreForm = new FormGroup({
      newGenre: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)])
    });
    this.getGenre();
  }

  getGenre(){
    this.libraryService.getGenre().subscribe(data=>{
      this.genreList = data;
    })
  }

  addGenre(){
    let chekin = true;
    for (let i = 0; i < this.genreList.length; i++) {
      if (this.genreList[i].genre == this.addGenreForm.value.newGenre ){
        this.alarmSearchGenreDiv = false;
        this.successfull = true;
        chekin = false;
        this.addGenreForm.reset(); break
      } 
    } 
    if(chekin == true){
        this.libraryService.addGenre(this.addGenreForm.value.newGenre).subscribe((data)=>{
        this.genreList.push(data)
        this.alarmSearchGenreDiv = true;
        this.successfull = false
        })
    }
    this.addGenreForm.reset();
  }

}
