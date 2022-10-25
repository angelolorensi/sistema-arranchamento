import { ActivatedRoute, Router } from '@angular/router';
import { ArranchamentoService } from '../../services/arranchamento.service';
import { Militar } from '../../model/Militar';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-efetivo',
  templateUrl: './cadastrar-efetivo.component.html',
  styleUrls: ['./cadastrar-efetivo.component.css'],
})
export class CadastrarEfetivoComponent implements OnInit {
  form: FormGroup;

  efetivo: Observable<Militar[]>;
  displayedColumns = [
    'graduacao',
    'nomeDeGuerra',
    'identidade',
    'numero',
    'cia',
    'om',
  ];

  constructor(
    private arranchamentoService: ArranchamentoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.efetivo = this.arranchamentoService.buscarMilitar();
    this.form = this.formBuilder.group({
      identidade: [null],
      nomeDeGuerra: [null],
      numero: [null],
      graduacao: [null],
      cia: [null],
      om: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.arranchamentoService.salvarMilitar(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError
    );
  }

  onSuccess() {
    this.snackBar.open('Militar salvo com sucesso', '', { duration: 5000 });
  }

  resetPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
  }

  onError() {
    this.snackBar.open('Erro ao salvar militar', '', { duration: 5000 });
  }
}
