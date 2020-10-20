import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from './single-post/single-post.component';
import { CreatePostComponent } from './create-post/create-post.component'; // l'import du FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SinglePostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule       // rajoutez cette ligne avec l'import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
