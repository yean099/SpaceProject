import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {Cabina} from './cabina/cabina';
import { fuselaje } from './fuselaje/fuselaje';
import { motor } from './motor/motor';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { DecimalPipe } from '@angular/common';



@NgModule({
  declarations: [
    fuselaje,
    Cabina,
    motor
  ],
  imports: [NgbPaginationModule, NgbAlertModule,
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    RouterModule.forRoot([
    {path:'planetas',component:fuselaje},
    {path:'planetas/:id',component:fuselaje}])

  ],
  providers: [DecimalPipe],
  bootstrap: [fuselaje]
})
export class AppModule { }
