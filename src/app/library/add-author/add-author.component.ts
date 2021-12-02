import { Component, OnInit } from '@angular/core';
import { LibraryServiceService } from 'src/app/library-service.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorsList:any;
  authorForm:any = FormGroup;
  newAuthor:any[]=[];
  successfull = true;
  

  constructor(private libraryService:LibraryServiceService) { }

  getAuthorList(){
    this.libraryService.getAuthor().subscribe(data => {
      this.authorsList = data;
    })
  }

  addAuthor(){
    this.newAuthor.push(this.authorForm.value);
    this.libraryService.addAuthor(this.newAuthor[0].surname,this.newAuthor[0].name,this.newAuthor[0].birth,this.newAuthor[0].middleName).subscribe(data => {
      this.authorsList.push(data);
      this.successfull = false;
    })
    this.authorForm.reset();
    this.newAuthor.length = 0
  }

  ngOnInit(): void {
    this.authorForm = new FormGroup({
      surname: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
      name: new FormControl('',[Validators.required,Validators.pattern(/[A-Za-z]/)]),
      middleName: new FormControl(null,Validators.pattern(/[A-Za-z]/)),
      birth : new FormControl('',[Validators.required,Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/)]),
    });
    this.getAuthorList()
  }

}
