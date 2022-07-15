import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FerramentasComponent } from './ferramentas/ferramentas.component';
import { ObjetosComponent } from './objetos/objetos.component';

const routes: Routes = [
  {path: 'ferramentas', component: FerramentasComponent},
  {path: 'objetos', component: ObjetosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
