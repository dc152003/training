import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductComponent } from './addproduct';

describe('Addproduct', () => {
  let component: AddproductComponent;
  let fixture: ComponentFixture<AddproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
