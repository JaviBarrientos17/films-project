import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './peliculasComponent/peliculasComponent.component';
import { SeriesComponent } from './seriesComponent/seriesComponent';

const routes: Routes = [
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }