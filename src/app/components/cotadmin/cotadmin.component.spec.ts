import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotadminComponent } from './cotadmin.component';

describe('CotadminComponent', () => {
  let component: CotadminComponent;
  let fixture: ComponentFixture<CotadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CotadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
