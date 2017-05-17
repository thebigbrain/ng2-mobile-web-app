import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLearningComponent } from './video-learning.component';

describe('VideoLearningComponent', () => {
  let component: VideoLearningComponent;
  let fixture: ComponentFixture<VideoLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
