import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCardsFormComponent } from './create-cards-form.component';

describe('CreateCardsFormComponent', () => {
  let component: CreateCardsFormComponent;
  let fixture: ComponentFixture<CreateCardsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCardsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
