import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MemeComponent } from './meme/meme.component';
import { MemeFormComponent } from './meme-form/meme-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MemeComponent,
    MemeFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap dice cual es el componente principal
})
export class AppModule { }


// es como el package json

