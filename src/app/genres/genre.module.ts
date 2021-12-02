import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddGenreComponent, DisplayGenresComponent, EditGenreComponent } from "./index";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        AddGenreComponent,
        DisplayGenresComponent,
        EditGenreComponent
    ],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports: []
})
export class GenreModule {}