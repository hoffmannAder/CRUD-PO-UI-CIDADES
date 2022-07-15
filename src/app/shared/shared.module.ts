import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule } from '@angular/forms';

//const routes: Routes = [];

@NgModule({
  imports: [CommonModule,
            FormsModule,
            PoModule,
            PoTemplatesModule],
  exports: [CommonModule,
            FormsModule,
            PoModule,
            PoTemplatesModule]
})
export class AppRoutingModule { }