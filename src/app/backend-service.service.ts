import { Injectable } from '@angular/core';
import {InMemoryDbService} from  'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let authors = [
      { id: 1, surname: "Gogol", name:"Mykola", middleName: "Vasylovych", birth:"01-04-1809"}, 
      { id: 2, surname: "Shevchenko", name:"Taras",middleName: "Grygorovych", birth:"09-03-1814"},
      { id: 3, surname: "Doe", name:"Jhon",birth:"01-02-1111"}
    ];
    let books =  [
      {id:1, author:"Gogol", title:"Vii", genre:"Horor", pages:"150", authorId:1, genreId:1},
      {id:2, author:"Gogol", title:"Taras Bulba", genre:"Action", pages:"250", authorId:1, genreId:2},
      {id:3, author:"Shevchenko", title:"Zapovit", genre:"Poem", pages:"350",authorId:2, genreId:3},
      {id:4, author:"Shevchenko", title:"Zapovit2", genre:"Horor", pages:"450",authorId:2, genreId:1},
      {id:5, author:"Doe", title:"Unknown", genre:"Drama",pages:"50", authorId:3, genreId:4}
      ];
    let genre = [
      {id:1, genre:"Horor"},
      {id:2, genre:"Action"},
      {id:3, genre:"Poem"},
      {id:4, genre:"Drama"}
      ];     
    return{authors,books,genre}  
  }
}
