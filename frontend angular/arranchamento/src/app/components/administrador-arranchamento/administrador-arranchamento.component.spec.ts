import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorArranchamentoComponent } from './administrador-arranchamento.component';

describe('AdministradorArranchamentoComponent', () => {
  let component: AdministradorArranchamentoComponent;
  let fixture: ComponentFixture<AdministradorArranchamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradorArranchamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradorArranchamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
