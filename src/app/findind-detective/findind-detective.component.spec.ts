import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindindDetectiveComponent } from './findind-detective.component';

describe('FindindDetectiveComponent', () => {
  let component: FindindDetectiveComponent;
  let fixture: ComponentFixture<FindindDetectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindindDetectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindindDetectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
