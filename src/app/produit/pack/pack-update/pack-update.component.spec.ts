import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackUpdateComponent } from './pack-update.component';

describe('PackUpdateComponent', () => {
  let component: PackUpdateComponent;
  let fixture: ComponentFixture<PackUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
