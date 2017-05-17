import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDistributionComponent } from './activity-distribution.component';

describe('ActivityDistributionComponent', () => {
  let component: ActivityDistributionComponent;
  let fixture: ComponentFixture<ActivityDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
