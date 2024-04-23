import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalEventsComponent } from './vertical-events.component';

describe('VerticalEventsComponent', () => {
  let component: VerticalEventsComponent;
  let fixture: ComponentFixture<VerticalEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalEventsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
