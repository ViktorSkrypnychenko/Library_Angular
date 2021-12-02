import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';


@Component({
  selector: 'app-display-genres',
  templateUrl: './display-genres.component.html',
  styleUrls: ['./display-genres.component.css']
})
export class DisplayGenresComponent implements OnInit {
  genreList:any;

  constructor(private libraryService:LibraryServiceService) { }

  getGenre(){
    this.libraryService.getGenre().subscribe(data=>{
      this.genreList = data;
    })
  }
  sortingAZ(){
    this.genreList.sort((a: any,b: any)=>a.genre.localeCompare(b.genre));
  }

  ngOnInit(): void {
    this.getGenre();
  }

}
