import { Component, Input, OnInit, OnDestroy } from '@angular/core';
//import { PoPageDynamicEditActions, PoPageDynamicField, PoPageDynamicTableOptions } from '@po-ui/ng-templates';
import { HttpClient } from '@angular/common/http';
import { InputBoolean, PoBreadcrumb } from '@po-ui/ng-components';
import { PoPageDynamicTableActions, PoPageDynamicTableField, PoPageDynamicTableOptions } from '@po-ui/ng-templates';

@Component({
  selector: 'app-cidade-list',
  templateUrl: './cidade-list.component.html',
  styleUrls: []
})

export class CidadeListComponent {

  isHideLoading: boolean = true

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getInterceptorAPI();
  }

  readonly fields: Array<PoPageDynamicTableField> = [
    { property: 'id', key: true, visible: false },
    { property: 'codCidade', label: 'Cidade' },
    { property: 'codEstado', label: 'Estado' },
    { property: 'nomePais', label: 'Pais' },
    { property: 'nomeSigla', label: 'Sigla' },
    { property: 'nomeAbeReg', label: 'Região' },
    { property: 'nomeMicReg', label: 'Microrregião' },
    { property: 'cdnDomicFisc', label: 'Domicílio Fiscal' },
    { property: 'cdnMunpioIbge', label: 'Município IBGE' },
    { property: 'search', visible: false }
  ]

  readonly actions: PoPageDynamicTableActions = {
    detail: '/cidades/detail/:id',
    edit: 'cidades/edit/:id',
    remove: true
  }

  readonly breadcrumb: PoBreadcrumb = { 
    items: [{ label: 'Home', link: '/' }, { label: 'Cidades' }]
  };

  onLoad(): PoPageDynamicTableOptions {
    return {
      fields: [
        { property: 'id', key: true, visible: false, filter: false },
        { property: 'codCidade', key: false, visible: true, filter: true },
        { property: 'codEstado', key: false, visible: true, filter: true },
        { property: 'nomePais', key: false, visible: true, filter: true },
        { property: 'search', visible: false }
      ]
    };
  }

  getInterceptorAPI() {
    this.isHideLoading = false
    return this._http
      .get('http://191.23.83.141:8080/api/sec/v1/exemplo')
      .subscribe(data => {
        this.isHideLoading = true
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data))
      });
  }
}
