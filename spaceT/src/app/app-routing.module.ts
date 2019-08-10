import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {fuselaje} from './fuselaje/fuselaje'



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
