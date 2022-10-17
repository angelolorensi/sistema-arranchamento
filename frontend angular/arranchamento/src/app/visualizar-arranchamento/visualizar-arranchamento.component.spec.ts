import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarArranchamentoComponent } from './visualizar-arranchamento.component';

describe('VisualizarArranchamentoComponent', () => {
  let component: VisualizarArranchamentoComponent;
  let fixture: ComponentFixture<VisualizarArranchamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarArranchamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarArranchamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
