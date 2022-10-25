import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArranchamentoIndividualComponent } from './arranchamento-individual.component';

describe('ArranchamentoIndividualComponent', () => {
  let component: ArranchamentoIndividualComponent;
  let fixture: ComponentFixture<ArranchamentoIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArranchamentoIndividualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArranchamentoIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
