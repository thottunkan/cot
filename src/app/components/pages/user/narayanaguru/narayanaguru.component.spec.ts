import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarayanaguruComponent } from './narayanaguru.component';

describe('NarayanaguruComponent', () => {
  let component: NarayanaguruComponent;
  let fixture: ComponentFixture<NarayanaguruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NarayanaguruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarayanaguruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
