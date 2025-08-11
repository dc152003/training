import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmp } from './delete-emp';

describe('DeleteEmp', () => {
  let component: DeleteEmp;
  let fixture: ComponentFixture<DeleteEmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteEmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteEmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
