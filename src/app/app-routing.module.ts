import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculasComponent/peliculasComponent.component';
import { SeriesComponent } from './seriesComponent/seriesComponent';

const routes: Routes = [
  // TODO COMENTAR LA SIGUIENTE LINEA PARA VER SI FUNCIONA
  // TODO CORRECTAMENTE EL RENDER DEL HEADER/FOOTER EN EL APPP COMPONENT
  { path: '', component: AppComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
