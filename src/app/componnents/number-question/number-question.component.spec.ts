import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberQuestionComponent } from './number-question.component';

describe('NumberQuestionComponent', () => {
  let component: NumberQuestionComponent;
  let fixture: ComponentFixture<NumberQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumberQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
