import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viewaccdetails } from './viewaccdetails';

describe('Viewaccdetails', () => {
  let component: Viewaccdetails;
  let fixture: ComponentFixture<Viewaccdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewaccdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Viewaccdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
