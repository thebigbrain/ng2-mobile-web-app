import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityPartyComponent } from './activity-party.component';

describe('ActivityPartyComponent', () => {
  let component: ActivityPartyComponent;
  let fixture: ComponentFixture<ActivityPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
