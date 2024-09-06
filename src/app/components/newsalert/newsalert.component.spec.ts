import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsalertComponent } from './newsalert.component';

describe('NewsalertComponent', () => {
  let component: NewsalertComponent;
  let fixture: ComponentFixture<NewsalertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsalertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
