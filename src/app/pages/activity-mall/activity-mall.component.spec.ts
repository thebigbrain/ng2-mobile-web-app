import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityMallComponent } from './activity-mall.component';

describe('ActivityMallComponent', () => {
  let component: ActivityMallComponent;
  let fixture: ComponentFixture<ActivityMallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityMallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityMallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
