import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TAndCComponent } from './tand-c.component';

describe('TAndCComponent', () => {
  let component: TAndCComponent;
  let fixture: ComponentFixture<TAndCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TAndCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TAndCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
