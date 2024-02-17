import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../Pessoa';
import { PessoaService } from '../../services/pessoa.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  pessoa: Pessoa = new Pessoa();
  pessoas: Pessoa[] = [];

  ngOnInit() {
    this.pessoa = new Pessoa();
  }

  constructor(private pessoaService: PessoaService) { }

  onSubmit() {
    console.log(this.pessoa);
    this.pessoas = this.pessoaService.add(this.pessoas, this.pessoa);
    this.pessoa = new Pessoa();
  }

  removePessoa(pessoa: Pessoa) {
    this.pessoas = this.pessoaService.remove(this.pessoas, pessoa);
  }
}