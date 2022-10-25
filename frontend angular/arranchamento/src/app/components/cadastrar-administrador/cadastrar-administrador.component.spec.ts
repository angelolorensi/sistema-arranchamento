import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAdministradorComponent } from './cadastrar-administrador.component';

describe('CadastrarAdministradorComponent', () => {
  let component: CadastrarAdministradorComponent;
  let fixture: ComponentFixture<CadastrarAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
