import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastEventsDetailsComponent } from './past-events-details.component';

describe('PastEventsDetailsComponent', () => {
  let component: PastEventsDetailsComponent;
  let fixture: ComponentFixture<PastEventsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastEventsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastEventsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
