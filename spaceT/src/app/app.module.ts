import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {Cabina} from './cabina/cabina';
import { fuselaje } from './fuselaje/fuselaje';
import { motor } from './motor/motor';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    fuselaje,
    Cabina,
    motor
  ],
  imports: [NgbPaginationModule, NgbAlertModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [fuselaje]
})
export class AppModule { }
