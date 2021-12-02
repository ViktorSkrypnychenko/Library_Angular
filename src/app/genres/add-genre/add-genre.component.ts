import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {
   
  genreList:any;
  addGenreForm:any=FormGroup;
  alarmSearchGenreDiv = true;
  successfull=true;

  constructor(private libraryService:LibraryServiceService) { }

  getGenre(){
    this.libraryService.getGenre().subscribe(data=>{
      this.genreList = data;
      this.genreList.sort((a: any,b: any)=>a.genre.localeCompare(b.genre));
    })
  }

  addGenre(){
    let chekin = true;
    for (let i = 0; i < this.genreList.length; i++) {
      if (this.genreList[i].genre == this.addGenreForm.controls.newGenre.value ){
        this.alarmSearchGenreDiv = false;
        this.successfull = true;
        chekin = false;
        this.addGenreForm.reset(); break
      } 
    } 
    if(chekin == true){
      this.libraryService.addGenre(this.addGenreForm.controls.newGenre.value).subscribe(data=>{
        this.genreList.push(data)
        this.getGenre();
        this.alarmSearchGenreDiv = true;
        this.successfull = false
        })
    }
    this.addGenreForm.reset();
  }

  ngOnInit(): void {
    this.addGenreForm = new FormGroup({
      newGenre: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)])
    });
    this.getGenre();
  }

}
