import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetVideoComponentComponent } from './pet-video-component.component';

describe('PetVideoComponentComponent', () => {
  let component: PetVideoComponentComponent;
  let fixture: ComponentFixture<PetVideoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetVideoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
