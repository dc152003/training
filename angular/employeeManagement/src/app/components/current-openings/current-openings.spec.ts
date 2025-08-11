import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpenings } from './current-openings';

describe('CurrentOpenings', () => {
  let component: CurrentOpenings;
  let fixture: ComponentFixture<CurrentOpenings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentOpenings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentOpenings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
