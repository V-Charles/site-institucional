import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from '../../services/colaborador.service';
import { Colaborador } from '../../models/colaborador.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  colunasExibidas: string[] = ['id', 'nome', 'cargo', 'departamento', 'acoes'];

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.carregarColaboradores();
  }

  carregarColaboradores(): void {
    this.colaboradorService.listar().subscribe(dados => {
      this.colaboradores = dados;
    });
  }

  excluir(id: number | undefined): void {
    if (id !== undefined && confirm('Tem certeza que deseja excluir este colaborador?')) {
      this.colaboradorService.excluir(id).subscribe(() => {
        this.carregarColaboradores();
      });
    }
  }
}