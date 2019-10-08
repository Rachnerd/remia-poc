import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeverancierSearchComponent } from './leverancier-search.component';

describe('LeverancierSearchComponent', () => {
  let component: LeverancierSearchComponent;
  let fixture: ComponentFixture<LeverancierSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeverancierSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeverancierSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
