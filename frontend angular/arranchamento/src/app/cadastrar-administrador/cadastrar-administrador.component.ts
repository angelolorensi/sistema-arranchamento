import { Administrador } from './../model/Administrador';
import { ActivatedRoute, Router } from '@angular/router';
import { ArranchamentoService } from './../services/arranchamento.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastrar-administrador',
  templateUrl: './cadastrar-administrador.component.html',
  styleUrls: ['./cadastrar-administrador.component.css'],
})
export class CadastrarAdministradorComponent implements OnInit {
  form: FormGroup;

  efetivo: Observable<Administrador[]>;
  displayedColumns = [
    'login',
    'senha',
    'cia',
  ];

  constructor(
    private arranchamentoService: ArranchamentoService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.efetivo = this.arranchamentoService.buscarAdministrador();
    this.form = this.formBuilder.group({
      login: [null],
      senha: [null],
      cia: [null],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.arranchamentoService.salvarAdministrador(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError
    );
  }

  onSuccess() {
    this.snackBar.open('Administrador salvo com sucesso', '', { duration: 5000 });
  }

  resetPage() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['./'], {
      relativeTo: this.route,
    });
  }

  onError() {
    this.snackBar.open('Erro ao salvar Administrador', '', { duration: 5000 });
  }
}
