import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculasComponent/peliculasComponent.component';
import { SeriesComponent } from './seriesComponent/seriesComponent';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
