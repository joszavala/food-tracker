import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyValueEditComponent } from './daily-value-edit.component';

describe('DailyValueEditComponent', () => {
  let component: DailyValueEditComponent;
  let fixture: ComponentFixture<DailyValueEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyValueEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyValueEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
