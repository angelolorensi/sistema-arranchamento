import { VisualizarArranchamentoComponent } from './components/visualizar-arranchamento/visualizar-arranchamento.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { ArranchamentoIndividualComponent } from './components/arranchamento-individual/arranchamento-individual.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorHomeComponent } from './components/administrador-home/administrador-home.component';
import { AdministradorArranchamentoComponent } from './components/administrador-arranchamento/administrador-arranchamento.component';
import { EscalaComponent } from './components/escala/escala.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { CadastrarAdministradorComponent } from './components/cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarEfetivoComponent } from './components/cadastrar-efetivo/cadastrar-efetivo.component';

const routes: Routes = [
  { path: '', component: MenuPrincipalComponent },
  {
    path: 'arranchamento-individual',
    component: ArranchamentoIndividualComponent,
  },
  {
    path: 'visualizar-arranchamento',
    component: VisualizarArranchamentoComponent,
  },
  { path: 'administrador-home', component: AdministradorHomeComponent },
  {
    path: 'administrador-arranchamento',
    component: AdministradorArranchamentoComponent,
  },
  { path: 'escala', component: EscalaComponent },
  { path: 'relatorio', component: RelatorioComponent },
  {
    path: 'cadastrar-administrador',
    component: CadastrarAdministradorComponent,
  },
  { path: 'cadastrar-efetivo', component: CadastrarEfetivoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
