import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroTrainingComponent } from './micro-training.component';

describe('MicroTrainingComponent', () => {
  let component: MicroTrainingComponent;
  let fixture: ComponentFixture<MicroTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
