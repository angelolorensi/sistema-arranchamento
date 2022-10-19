import { Refeicao } from './../model/Refeicao';
import { Militar } from './../model/Militar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Administrador } from '../model/Administrador';

@Injectable({
  providedIn: 'root',
})
export class ArranchamentoService {
  private readonly APImilitar = 'api/militar/';
  private readonly APIadministrador = 'api/administrador/';
  private readonly APIrefeicao = 'api/refeicao/';

  constructor(private httpClient: HttpClient) {}

  buscarMilitar() {
    return this.httpClient.get<Militar[]>(this.APImilitar);
  }

  salvarMilitar(militar: Militar) {
    return this.httpClient.post<Militar>(this.APImilitar, militar);
  }

  buscarAdministrador() {
    return this.httpClient.get<Administrador[]>(this.APIadministrador);
  }

  salvarAdministrador(administrador: Administrador) {
    return this.httpClient.post<Militar>(this.APIadministrador, administrador);
  }

  salvarRefeicao(refeicao: Refeicao){
    return this.httpClient.post<Refeicao>(this.APIrefeicao, refeicao)
  }
}
