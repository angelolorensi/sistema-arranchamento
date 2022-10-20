import { Component,OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-arranchamento-individual',
  templateUrl: './arranchamento-individual.component.html',
  styleUrls: ['./arranchamento-individual.component.css']
})
export class ArranchamentoIndividualComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  addDays(diasAcrescentados: number, data = new Date()) {
    data.setDate(data.getDate() + diasAcrescentados);
    return data;
  }

 @Output() data1 = this.addDays(0, new Date())
 @Output() data2 = this.addDays(1, new Date())
 @Output() data3 = this.addDays(2, new Date())
 @Output() data4 = this.addDays(3, new Date())
 @Output() data5 = this.addDays(4, new Date())
 @Output() data6 = this.addDays(5, new Date())
 @Output() data7 = this.addDays(6, new Date())

}
