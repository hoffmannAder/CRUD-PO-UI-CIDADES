import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField } from '@po-ui/ng-components';
import { PoPageDynamicEditActions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cidade-edit',
  templateUrl: './cidade-edit.component.html',
  styleUrls: ['./cidade-edit.component.css']
})
export class CidadeEditComponent implements OnInit {

  public readonly fields: Array<PoDynamicFormField> = [
    { label: 'Cidade', property: 'codCidade', divider: 'Dados Cidade', disabled: true },
    {
      property: 'codEstado',
      label: 'Estado',
      disabled: true,
      gridColumns: 1,
      gridSmColumns: 16,
      optional: false,
      options: ['AC','AL','AP','AM','BA','CE','DF','ES',
      'GO','MA','MT','MS','MG','PA','PB','PR','PE','PI',
      'RJ','RN','RS','RO','RR','SC','SP','SE','TO' 
      ],
      optionsMulti: false
    },
    { label: 'Pais', property: 'nomePais', disabled: true},
    { label: 'Sigla', property: 'nomeSigla', divider: 'Sigla'},
    { label: 'Região', property: 'nomeAbeReg', divider: 'Região' },
    { label: 'Microrregião', property: 'nomeMicReg'},
    { label: 'Domicílio Fiscal', property: 'cdnDomicFisc'},
    { label: 'Município IBGE', property: 'cdnMunpioIbge'},
    
  ];

  public readonly actions: PoPageDynamicEditActions = {
    save: '/'
  };


  constructor() { }

  ngOnInit(): void {
  }

}
