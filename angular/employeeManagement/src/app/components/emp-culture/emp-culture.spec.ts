import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCulture } from './emp-culture';

describe('EmpCulture', () => {
  let component: EmpCulture;
  let fixture: ComponentFixture<EmpCulture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpCulture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpCulture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
