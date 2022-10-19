import { ArranchamentoService } from './../../services/arranchamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-escolher-refeicao',
  templateUrl: './escolher-refeicao.component.html',
  styleUrls: ['./escolher-refeicao.component.css'],
})
export class EscolherRefeicaoComponent implements OnInit {
  minhaData1: Date;
  minhaData2: Date;
  minhaData3: Date;
  minhaData4: Date;
  minhaData5: Date;
  minhaData6: Date;
  minhaData7: Date;

  formCheckbox: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private arranchamentoService: ArranchamentoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.minhaData1 = new Date();
    this.minhaData2 = new Date();
    this.minhaData2.setDate(this.minhaData2.getDate() + 1);
    this.minhaData3 = new Date();
    this.minhaData3.setDate(this.minhaData3.getDate() + 2);
    this.minhaData4 = new Date();
    this.minhaData4.setDate(this.minhaData4.getDate() + 3);
    this.minhaData5 = new Date();
    this.minhaData5.setDate(this.minhaData5.getDate() + 4);
    this.minhaData6 = new Date();
    this.minhaData6.setDate(this.minhaData6.getDate() + 5);
    this.minhaData7 = new Date();
    this.minhaData7.setDate(this.minhaData7.getDate() + 6);

    this.formCheckbox = this.formBuilder.group({
      dia1: formBuilder.group({
        dataRefeicao: [this.minhaData1],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
      dia2: formBuilder.group({
        dataRefeicao: [this.minhaData2],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
      dia3: formBuilder.group({
        dataRefeicao: [this.minhaData3],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
      dia4: formBuilder.group({
        dataRefeicao: [this.minhaData4],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
      dia5: formBuilder.group({
        dataRefeicao: [this.minhaData5],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
      dia6: formBuilder.group({
        dataRefeicao: [this.minhaData6],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
      dia7: formBuilder.group({
        dataRefeicao: [this.minhaData7],
        cafe: [false],
        almoco: [false],
        janta: [false],
      }),
    });
  }

  onSubmit() {
    //this.arranchamentoService.salvarRefeicao(this.formCheckbox.value).subscribe(result =>  this.onSuccess(), error => this.onError);
    console.log(this.formCheckbox.value)
  }

  onSuccess() {
    this.snackBar.open('Refeicao salva com sucesso', '', { duration: 5000 });
  }

  resetPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
  }

  onError() {
    this.snackBar.open('Erro ao salvar refeicao', '', { duration: 5000 });
  }

  ngOnInit(): void {}
}
