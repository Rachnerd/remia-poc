import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverancierNotFoundComponent } from './leverancier-not-found.component';

describe('LeverancierNotFoundComponent', () => {
  let component: LeverancierNotFoundComponent;
  let fixture: ComponentFixture<LeverancierNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeverancierNotFoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverancierNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
