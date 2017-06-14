//import {Routes, RouterModule} from '@angular/router';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { BoldDirective} from './bold.directive';
import {AppComponent} from './app-component/app.component';
import {HeaderComponent} from './header-component/header.component';
import {FooterComponent} from './footer-component/footer.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent, HeaderComponent, FooterComponent, BoldDirective],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }