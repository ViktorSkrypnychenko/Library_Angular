import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddAuthorComponent, DisplayAuthorsComponent,EditAuthorComponent } from "./index";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
    declarations:[
        AddAuthorComponent,
        DisplayAuthorsComponent,
        EditAuthorComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports: []
})
export class authorModule {}