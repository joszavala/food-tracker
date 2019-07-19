import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNutritionDataComponent } from './table-nutrition-data.component';

describe('TableNutritionDataComponent', () => {
  let component: TableNutritionDataComponent;
  let fixture: ComponentFixture<TableNutritionDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNutritionDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNutritionDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
