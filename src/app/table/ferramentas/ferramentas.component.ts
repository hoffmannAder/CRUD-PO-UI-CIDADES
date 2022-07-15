import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ferramentas',
  templateUrl: './ferramentas.component.html',
  styleUrls: []
})
export class FerramentasComponent implements OnInit {

  columns: Array<any> = [
    { property: 'id', label: 'Código', align: 'right', visible: false, readonly: true, freeze: true, width: 120 },
    { property: 'codCidade', label: 'Código', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'codEstado', label: 'Estado', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'nomePais', label: 'País', align: 'right', readonly: true, freeze: true, width: 120 },
    { property: 'nomeSigla', label: 'Sigla', align: 'right', readonly: false, freeze: true, width: 120 },
    { property: 'nomeAbeReg', label: 'Região', align: 'right', readonly: false, freeze: true, width: 120 },
    { property: 'nomeMicReg', label: 'Microrregião', align: 'right', readonly: false, freeze: true, width: 120 },
    { property: 'cdnDomicFisc', label: 'Domicílio Fiscal', align: 'right', readonly: false, freeze: true, width: 120 },
    { property: 'cdnMunpioIbge', label: 'Município IBGE', align: 'right', readonly: false, freeze: true, width: 120 }
  ];

  rowActions = {
    beforeSave: this.onBeforeSave.bind(this)
  };

  onBeforeSave(row: any, old: any) {
    console.log('onBeforeSave: ', row);
  }

  data = [];

  constructor() { }

  ngOnInit(): void {
    let retorno = JSON.parse(localStorage.getItem('data')!);
    this.data = retorno.items;
    console.log(this.data);
  }

}
