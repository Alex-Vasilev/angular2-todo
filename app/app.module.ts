//import {Routes, RouterModule} from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
//import { ActiveTodosComponent }   from './active.component';
//import { CompletedTodosComponent }   from './completed.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent,/* ActiveTodosComponent, CompletedTodosComponent*/],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }