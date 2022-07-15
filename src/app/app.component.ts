import { Component } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  menus: Array<PoMenuItem> = [
    {
      label: 'Lista de cidades',
      action: this.cidades.bind(this),
      icon: 'po-icon-home',
      shortLabel: 'Cidades',
      link: '/cidades'
    },
    {
      label: 'Cadastrar cidade',
      action: this.cadastrar.bind(this),
      icon: 'po-icon-edit',
      shortLabel: 'Cadastrar',
      link: '/cidades/new'
    },
    { label: 'Table', shortLabel: 'Table', icon: 'po-icon-table', subItems: [
      {label: 'Ferramentas', shortLabel: 'Ferramentas', link: 'table/ferramentas', icon: 'po-icon-star' },
      {label: 'Objetos', shortLabel: 'Objetos', link: 'table/objetos', icon: 'po-icon-star-filled'}
      ]
    }
  ];

  constructor(private router: Router) { }

  cidades(menu: PoMenuItem) {
    this.router.navigate([menu.link])
  }

  cadastrar(menu: PoMenuItem) {
    this.router.navigate([menu.link])
  }

}
