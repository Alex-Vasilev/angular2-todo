//import {Routes, RouterModule} from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import {AppComponent} from './app-component/app.component';
import {HeaderComponent} from './header-component/header.component';
import {FooterComponent} from './footer-component/footer.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, HeaderComponent, FooterComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }