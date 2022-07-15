import { Component, OnInit } from '@angular/core';
import { PoPageDynamicEditActions, PoPageDynamicEditField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cidade-form',
  templateUrl: './cidade-form.component.html',
  styleUrls: ['./cidade-form.component.css']
})
export class CidadeFormComponent implements OnInit {

  public readonly actions: PoPageDynamicEditActions = {
    cancel: '/',
    save: '/',
  };

  public readonly fields: Array<PoPageDynamicEditField> = [
      {
        property: 'codEstado',
        label: 'Estado',
        gridMdColumns: 12,
        gridSmColumns: 12,
        optional: false,
        options: ['AC','AL','AP','AM','BA','CE','DF','ES',
        'GO','MA','MT','MS','MG','PA','PB','PR','PE','PI',
        'RJ','RN','RS','RO','RR','SC','SP','SE','TO' 
        ],
        optionsMulti: false
      },
      { label: 'Cidade', property: 'codCidade', divider: 'Dados Cidade', gridSmColumns: 6 },
      { label: 'Pais', property: 'nomePais', gridSmColumns: 6},
      { label: 'Sigla', property: 'nomeSigla', divider: 'Sigla'},
      { label: 'Região', property: 'nomeAbeReg', divider: 'Região', gridSmColumns: 6 },
      { label: 'Microrregião', property: 'nomeMicReg', gridSmColumns: 6},
      { label: 'Domicílio Fiscal', property: 'cdnDomicFisc', gridSmColumns: 6},
      { label: 'Município IBGE', property: 'dnMunpioIbge', gridSmColumns: 6},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
