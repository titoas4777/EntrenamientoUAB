import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenLabelsComponent } from './hidden-labels.component';

describe('HiddenLabelsComponent', () => {
  let component: HiddenLabelsComponent;
  let fixture: ComponentFixture<HiddenLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
