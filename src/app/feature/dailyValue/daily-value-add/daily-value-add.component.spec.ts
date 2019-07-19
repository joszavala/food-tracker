import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyValueAddComponent } from './daily-value-add.component';

describe('DailyValueAddComponent', () => {
  let component: DailyValueAddComponent;
  let fixture: ComponentFixture<DailyValueAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyValueAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyValueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
