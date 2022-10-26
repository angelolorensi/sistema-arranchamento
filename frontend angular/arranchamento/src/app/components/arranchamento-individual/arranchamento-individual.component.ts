import { Militar } from './../../model/Militar';
import { ArranchamentoService } from './../../services/arranchamento.service';
import { Component,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arranchamento-individual',
  templateUrl: './arranchamento-individual.component.html',
  styleUrls: ['./arranchamento-individual.component.css'],
})
export class ArranchamentoIndividualComponent implements OnInit {

  constructor(private service:ArranchamentoService) {

  }

  ngOnInit(): void {}

  addDays(diasAcrescentados: number, data = new Date()) {
    data.setDate(data.getDate() + diasAcrescentados);
    return data;
  }

  nome = 'ANGELO';

  getNome(id:number){
    this.service.buscarMilitarPorId(id).subscribe();
  }

  data1 = this.addDays(0, new Date());
  data2 = this.addDays(1, new Date());
  data3 = this.addDays(2, new Date());
  data4 = this.addDays(3, new Date());
  data5 = this.addDays(4, new Date());
  data6 = this.addDays(5, new Date());
  data7 = this.addDays(6, new Date());
}
