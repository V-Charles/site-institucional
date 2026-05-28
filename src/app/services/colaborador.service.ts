import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador.model';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {
  private apiUrl = '/api/index.php';

  constructor(private http: HttpClient) { }

  listar(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(this.apiUrl);
  }

  adicionar(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(this.apiUrl, colaborador);
  }

  atualizar(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.put<Colaborador>(this.apiUrl, colaborador);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}?id=${id}`);
  }
}