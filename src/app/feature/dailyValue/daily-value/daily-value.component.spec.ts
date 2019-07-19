import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyValueComponent } from './daily-value.component';

describe('DailyValueComponent', () => {
  let component: DailyValueComponent;
  let fixture: ComponentFixture<DailyValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
