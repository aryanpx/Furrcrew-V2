import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableDivComponent } from './scrollable-div.component';

describe('ScrollableDivComponent', () => {
  let component: ScrollableDivComponent;
  let fixture: ComponentFixture<ScrollableDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrollableDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
