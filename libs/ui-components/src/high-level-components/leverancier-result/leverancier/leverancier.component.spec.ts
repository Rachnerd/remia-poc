import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverancierComponent } from './leverancier.component';

describe('LeverancierDetailsComponent', () => {
  let component: LeverancierComponent;
  let fixture: ComponentFixture<LeverancierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeverancierComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
