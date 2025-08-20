import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranferPage } from './tranfer.page';

describe('TranferPage', () => {
  let component: TranferPage;
  let fixture: ComponentFixture<TranferPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TranferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
