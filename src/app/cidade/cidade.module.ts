import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoPageDynamicTableModule } from '@po-ui/ng-templates';
import { CidadeRoutingModule } from './cidade-routing.module';
import { CidadeListComponent } from './cidade-list/cidade-list.component';
import { CidadeFormComponent } from './cidade-form/cidade-form.component';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorsModule } from '../interceptors/interceptors.module';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule } from '@angular/forms';
import { CidadeEditComponent } from './cidade-edit/cidade-edit.component';
import { CidadeDetailComponent } from './cidade-detail/cidade-detail.component';
@NgModule({
  declarations: [CidadeListComponent, CidadeFormComponent, CidadeEditComponent, CidadeDetailComponent ],
  imports: [
    CommonModule,
    CidadeRoutingModule,
    HttpClientModule,
    InterceptorsModule,
    PoPageDynamicTableModule,
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ],
  exports:[
    CommonModule,
    CidadeRoutingModule,
    HttpClientModule,
    InterceptorsModule,
    PoPageDynamicTableModule,
    CommonModule,
    FormsModule,
    PoModule,
    PoTemplatesModule
  ]
})
export class CidadeModule { }
