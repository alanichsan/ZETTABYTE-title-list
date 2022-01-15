import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : 'home',
    component : HomeComponent,
  },
  {
    path : 'list-book',
    component : ListBookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
