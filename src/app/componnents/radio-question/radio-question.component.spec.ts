import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioQuestionComponent } from './radio-question.component';

describe('RadioQuestionComponent', () => {
  let component: RadioQuestionComponent;
  let fixture: ComponentFixture<RadioQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
