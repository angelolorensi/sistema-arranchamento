import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '@angular/common/locales/global/pt';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdministradorArranchamentoComponent } from './components/administrador-arranchamento/administrador-arranchamento.component';
import { AdministradorHomeComponent } from './components/administrador-home/administrador-home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArranchamentoIndividualComponent } from './components/arranchamento-individual/arranchamento-individual.component';
import { CadastrarAdministradorComponent } from './components/cadastrar-administrador/cadastrar-administrador.component';
import { CadastrarEfetivoComponent } from './components/cadastrar-efetivo/cadastrar-efetivo.component';
import { EscalaComponent } from './components/escala/escala.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { RelatorioComponent } from './components/relatorio/relatorio.component';
import { VisualizarArranchamentoComponent } from './components/visualizar-arranchamento/visualizar-arranchamento.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    ArranchamentoIndividualComponent,
    VisualizarArranchamentoComponent,
    AdministradorHomeComponent,
    AdministradorArranchamentoComponent,
    CadastrarEfetivoComponent,
    CadastrarAdministradorComponent,
    RelatorioComponent,
    EscalaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
