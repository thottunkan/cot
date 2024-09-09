import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SNDPCouncilMembersComponent } from './sndpcouncil-members.component';

describe('SNDPCouncilMembersComponent', () => {
  let component: SNDPCouncilMembersComponent;
  let fixture: ComponentFixture<SNDPCouncilMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SNDPCouncilMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SNDPCouncilMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
