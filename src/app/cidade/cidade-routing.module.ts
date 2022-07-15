import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CidadeDetailComponent } from './cidade-detail/cidade-detail.component';
import { CidadeEditComponent } from './cidade-edit/cidade-edit.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { CidadeListComponent } from './cidade-list/cidade-list.component';

const routes: Routes = [
  { path: '', component: CidadeListComponent},
  { path: 'new', component: CidadeFormComponent },
  { path: 'edit/:id', component: CidadeEditComponent },
  { path: 'detail/:id', component: CidadeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CidadeRoutingModule { }
