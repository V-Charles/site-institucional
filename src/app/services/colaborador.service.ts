import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  private apiUrl = 'http://localhost/api.php';

  private mockDados: Colaborador[] = [
    { id: 1, nome: 'João Silva', cargo: 'Desenvolvedor Frontend', departamento: 'TI' },
    { id: 2, nome: 'Maria Souza', cargo: 'Designer UI/UX', departamento: 'Design' }
  ];

  constructor(private http: HttpClient) { }

  listar():  Observable<Colaborador[]> {
    return of(this.mockDados);
  }

  excluir(id: number): Observable<any> {
    this.mockDados = this.mockDados.filter(c => c.id !== id);
    return of({  success: true });
  }
}
