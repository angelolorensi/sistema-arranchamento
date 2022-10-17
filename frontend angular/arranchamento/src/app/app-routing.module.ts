import { VisualizarArranchamentoComponent } from './visualizar-arranchamento/visualizar-arranchamento.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ArranchamentoIndividualComponent } from './arranchamento-individual/arranchamento-individual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorHomeComponent } from './administrador-home/administrador-home.component';
import { AdministradorArranchamentoComponent } from './administrador-arranchamento/administrador-arranchamento.component';
import { EscalaComponent } from './escala/escala.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { CadastrarAdministradorComponent } from './cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarEfetivoComponent } from './cadastrar-efetivo/cadastrar-efetivo.component';

const routes: Routes = [
  {path:'', component: MenuPrincipalComponent},
  {path:'arranchamento-individual', component: ArranchamentoIndividualComponent},
  {path:'visualizar-arranchamento', component: VisualizarArranchamentoComponent},
  {path:'administrador-home', component: AdministradorHomeComponent},
  {path:'administrador-arranchamento', component: AdministradorArranchamentoComponent},
  {path:'escala', component: EscalaComponent},
  {path:'relatorio', component: RelatorioComponent},
  {path:'cadastrar-administrador', component: CadastrarAdministradorComponent},
  {path:'cadastrar-efetivo', component: CadastrarEfetivoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
