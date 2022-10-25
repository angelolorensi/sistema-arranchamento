import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEfetivoComponent } from './cadastrar-efetivo.component';

describe('CadastrarEfetivoComponent', () => {
  let component: CadastrarEfetivoComponent;
  let fixture: ComponentFixture<CadastrarEfetivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEfetivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarEfetivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
