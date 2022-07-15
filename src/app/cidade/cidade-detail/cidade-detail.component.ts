import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicDetailActions, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cidade-detail',
  templateUrl: './cidade-detail.component.html',
  styleUrls: ['./cidade-detail.component.css']
})
export class CidadeDetailComponent implements OnInit {
  public readonly serviceApi = 'http://191.23.83.141:8080/api/sec/v1/exemplo/byid';

  public readonly actions: PoPageDynamicDetailActions = {
    back: '/cidades'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Cidades', link: '/cidades' },
      { label: 'Detail' }
    ]
  };

  public readonly fields: Array<PoPageDynamicDetailField> = [
    { label: 'id', property: 'id', divider: 'Dados Cidade', key: true},
    { label: 'Cidade', property: 'codCidade', key: false},
    {
      property: 'codEstado',
      label: 'Estado',
      },
    { label: 'Pais', property: 'nomePais'},
    { label: 'Sigla', property: 'nomeSigla', divider: 'Sigla'},
    { label: 'Região', property: 'nomeAbeReg', divider: 'Região' },
    { label: 'Microrregião', property: 'nomeMicReg'},
    { label: 'Domicílio Fiscal', property: 'cdnDomicFisc'},
    { label: 'Município IBGE', property: 'cdnMunpioIbge'},
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
