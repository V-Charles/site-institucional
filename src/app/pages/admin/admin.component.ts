import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColaboradorService } from '../../services/colaborador.service';
import { Colaborador } from '../../models/colaborador.model';
import { ColaboradorFormComponent } from '../../components/colaborador-form/colaborador-form.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  colaboradores: Colaborador[] = [];
  colunasExibidas: string[] = ['id', 'nome', 'cargo', 'departamento', 'acoes'];

  constructor(
    private colaboradorService: ColaboradorService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.carregarColaboradores();
  }

  carregarColaboradores(): void {
    this.colaboradorService.listar().subscribe(dados => {
      this.colaboradores = [...dados];
    });
  }

  abrirFormulario(colaborador?: Colaborador): void {
    const dialogRef = this.dialog.open(ColaboradorFormComponent, {
      width: '400px',
      data: colaborador ? { ...colaborador } : null
    });

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        if (resultado.id) {
          this.colaboradorService.atualizar(resultado).subscribe(() => this.carregarColaboradores());
        } else {
          this.colaboradorService.adicionar(resultado).subscribe(() => this.carregarColaboradores());
        }
      }
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