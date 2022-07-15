import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cidades',
    loadChildren: () => import('../app/cidade/cidade.module').then(m => m.CidadeModule)
  },
  {path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule)},
  { path: '', redirectTo: '/cidades', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
