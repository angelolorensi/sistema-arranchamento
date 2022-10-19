import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolherRefeicaoComponent } from './escolher-refeicao.component';

describe('EscolherRefeicaoComponent', () => {
  let component: EscolherRefeicaoComponent;
  let fixture: ComponentFixture<EscolherRefeicaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolherRefeicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscolherRefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
