import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { TableRoutingModule } from './table-routing.module';
import { ObjetosComponent } from './objetos/objetos.component';
import { FerramentasComponent } from './ferramentas/ferramentas.component';


@NgModule({
  declarations: [
    ObjetosComponent,
    FerramentasComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    PoModule
  ]
})
export class TableModule { }
