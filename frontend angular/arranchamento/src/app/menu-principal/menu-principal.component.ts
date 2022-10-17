import { ArranchamentoService } from './../services/arranchamento.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  formArranchamentoIndividual: FormGroup;
  formArranchamentoAdministrador: FormGroup;

  constructor(private formBuilder:FormBuilder, private arranchamentoService:ArranchamentoService) {
    this.formArranchamentoIndividual = this.formBuilder.group({
      loginArranchamentoIndividual:[null]
    })
    this.formArranchamentoAdministrador = this.formBuilder.group({
      arranchamentoAdministradorLogin:[null],
      arranchamentoAdministradorSenha:[null]
    })

  }

  ngOnInit(): void {
  }

  loginAdministrador(){

  }


}
