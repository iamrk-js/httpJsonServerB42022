import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { EditPostsComponent } from './components/edit-posts/edit-posts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthInterceptorService } from './shared/serives/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    AllPostsComponent,
    EditPostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
