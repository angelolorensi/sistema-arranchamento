import { Militar } from './../model/Militar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArranchamentoService {
  private readonly API = 'api/militar/';

  constructor(private httpClient: HttpClient) {}

  buscarMilitar() {
    return this.httpClient.get<Militar[]>(this.API);
  }

  salvarMilitar(militar: Militar) {
    return this.httpClient.post<Militar>(this.API, militar);
  }
}
