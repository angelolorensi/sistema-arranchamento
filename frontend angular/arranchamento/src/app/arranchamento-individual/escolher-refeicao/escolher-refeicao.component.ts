import { ArranchamentoService } from './../../services/arranchamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-escolher-refeicao',
  templateUrl: './escolher-refeicao.component.html',
  styleUrls: ['./escolher-refeicao.component.css'],
})
export class EscolherRefeicaoComponent implements OnInit {
  form: FormGroup;
  @Input() data: Date;

  constructor(private formBuilder: FormBuilder, private arranchamentoService: ArranchamentoService, private snackBar: MatSnackBar, private router: Router, private route: ActivatedRoute) {
    this.data = new Date();
    this.form = this.formBuilder.group({
      dataRefeicao: [this.data],
      cafe: [false],
      almoco: [false],
      janta: [false],
    });
  }

  onSubmit() {
    this.arranchamentoService.salvarRefeicao(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError
    );
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
