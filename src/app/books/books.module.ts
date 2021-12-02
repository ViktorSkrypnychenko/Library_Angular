import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddBookComponent, DisplayBooksComponent,EditBookComponent } from "./index";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    imports:[
        CommonModule,
        HttpClientModule
    ],
    declarations:[
        AddBookComponent,
        DisplayBooksComponent,
        EditBookComponent
         
    ],
    exports: [],
})
export class BooksModule {}