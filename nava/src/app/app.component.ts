import { Component } from '@angular/core';
import { Pessoa } from './Pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menus = ["Criar", "Editar", "Excluir"]
  title = 'nava';
}
