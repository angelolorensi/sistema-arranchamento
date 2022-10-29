import { FormBuilder, FormGroup } from '@angular/forms';
import { Militar } from './../../model/Militar';
import { ArranchamentoService } from './../../services/arranchamento.service';
import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-arranchamento-individual',
  templateUrl: './arranchamento-individual.component.html',
  styleUrls: ['./arranchamento-individual.component.css'],
})
export class ArranchamentoIndividualComponent implements OnInit {
  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  form5: FormGroup;
  form6: FormGroup;
  form7: FormGroup;

  militar?: Militar;

  constructor(
    private service: ArranchamentoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form1 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data1],
      militar: [this.militar?.id]
    });
    this.form2 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data2],
    });
    this.form3 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data3],
    });
    this.form4 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data4],
    });
    this.form5 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data5],
    });
    this.form6 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data6],
    });
    this.form7 = this.formBuilder.group({
      cafe: [false],
      almoco: [false],
      janta: [false],
      dataRefeicao: [this.data7],
    });
  }

  ngOnInit(): void {
    this.service.buscarMilitarPorId(14).subscribe({
      next: (response) => {
        this.militar = response;
        console.log(response);
      },
    });
  }

  onSubmit() {
    this.service.salvarRefeicao(this.form1.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError
    );
    console.log(this.militar?.id);
  }

  addDays(diasAcrescentados: number, data = new Date()) {
    data.setDate(data.getDate() + diasAcrescentados);
    return data;
  }

  data1 = this.addDays(0, new Date());
  data2 = this.addDays(1, new Date());
  data3 = this.addDays(2, new Date());
  data4 = this.addDays(3, new Date());
  data5 = this.addDays(4, new Date());
  data6 = this.addDays(5, new Date());
  data7 = this.addDays(6, new Date());

  onSuccess() {
    this.snackBar.open('Arranchamento salvo com sucesso', '', { duration: 5000 });
  }

  onError() {
    this.snackBar.open('Erro ao se arranchar', '', { duration: 5000 });
  }
}
