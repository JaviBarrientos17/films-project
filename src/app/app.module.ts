import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footerComponent/footerComponent';
import { HeaderComponent } from './headerComponent/headerComponent';
import { PeliculasComponent } from './peliculasComponent/peliculasComponent.component';
import { SeriesComponent } from './seriesComponent/seriesComponent';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    SeriesComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
