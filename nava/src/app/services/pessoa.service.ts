import { Injectable } from '@angular/core';
import { Pessoa } from '../Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  add(pessoas: Pessoa[], pessoa: Pessoa) {
    return pessoas.concat(pessoa);
  }

  remove(pessoas: Pessoa[], pessoa: Pessoa) {
    return pessoas.filter((a) => a.nome != pessoa.nome);
  }
}
