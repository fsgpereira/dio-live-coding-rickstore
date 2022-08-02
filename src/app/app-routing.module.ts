import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCharactersComponent } from './lista-characters/lista-characters.component';

const routes: Routes = [
  { path: '', component: ListaCharactersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
