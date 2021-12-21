import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorsRoute } from './Authors/routs';
import { booksRoute } from './Books/routs';
import { genresRoute } from './Genres/routs';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  ...authorsRoute,
  ...booksRoute,
  ...genresRoute,
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
