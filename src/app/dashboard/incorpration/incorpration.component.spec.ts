import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorprationComponent } from './incorpration.component';

describe('IncorprationComponent', () => {
  let component: IncorprationComponent;
  let fixture: ComponentFixture<IncorprationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorprationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorprationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
