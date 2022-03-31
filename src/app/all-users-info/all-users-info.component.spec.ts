import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersInfoComponent } from './all-users-info.component';

describe('AllUsersInfoComponent', () => {
  let component: AllUsersInfoComponent;
  let fixture: ComponentFixture<AllUsersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
