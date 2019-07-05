import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionFactsLabelComponent } from './nutrition-facts-label.component';

describe('NutritionFactsLabelComponent', () => {
  let component: NutritionFactsLabelComponent;
  let fixture: ComponentFixture<NutritionFactsLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionFactsLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionFactsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
