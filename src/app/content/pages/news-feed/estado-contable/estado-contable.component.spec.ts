import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoContableComponent } from './estado-contable.component';

describe('EstadoContableComponent', () => {
  let component: EstadoContableComponent;
  let fixture: ComponentFixture<EstadoContableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoContableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoContableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
