import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RegisterComponent } from './register/register.component';
import{HttpClientModule} from '@angular/common/http';
import { NewsserviceService } from './service/newsservice.service';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';


import { Component, Inject, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule } from '@angular/material/dialog';
import {NgxPaginationModule} from 'ngx-pagination';
import { UserService } from './service/user.service';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteserviceService } from './service/favoriteservice.service';
import { CanActivateGuard } from './can-activate.guard';

const routes:Routes=[{
  path:'login',//http://localhost:4200/login
  component:LoginComponent
},{
  path:'headline',
  component:HeadlineComponent,
  canActivate:[CanActivateGuard]
}]
@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    LoginComponent,
    HeaderComponent,
    
  
   RegisterComponent,
           FavoritesComponent
  
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,HttpClientModule,
    RouterModule,ReactiveFormsModule,MatDialogModule, MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule
    ,FormsModule 
  ],
  providers: [NewsserviceService,UserService,FavoriteserviceService,CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
