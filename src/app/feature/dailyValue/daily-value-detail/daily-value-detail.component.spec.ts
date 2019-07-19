import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyValueDetailComponent } from './daily-value-detail.component';

describe('DailyValueDetailComponent', () => {
  let component: DailyValueDetailComponent;
  let fixture: ComponentFixture<DailyValueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyValueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyValueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
