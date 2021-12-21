import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { Genre } from 'src/app/types';

@Component({
  selector: 'app-display-genres',
  templateUrl: './display-genres.component.html',
  styleUrls: ['./display-genres.component.css']
})
export class DisplayGenresComponent implements OnInit {

  genreList: Genre[] = [];

  constructor(private libraryService:LibraryServiceService) { }

  ngOnInit(): void {
    this.getGenre();
  }

  getGenre():void{
    this.libraryService.getGenre().subscribe(data=>{
      this.genreList = data
    })
  }

  sortingAZ(){
    this.genreList.sort((a: any,b: any)=>a.genre.localeCompare(b.genre));
  }

}
