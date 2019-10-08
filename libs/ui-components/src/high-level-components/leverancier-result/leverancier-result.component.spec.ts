import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverancierResultComponent } from './leverancier-result.component';

describe('LeverancierResultComponent', () => {
  let component: LeverancierResultComponent;
  let fixture: ComponentFixture<LeverancierResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeverancierResultComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverancierResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
