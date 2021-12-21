import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorsRoute } from './Authors/routs';
import { booksRoute } from './Books/routs';
import { genresRoute } from './Genres/routs';

const routes: Routes = [
  ...authorsRoute,
  ...booksRoute,
  ...genresRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
