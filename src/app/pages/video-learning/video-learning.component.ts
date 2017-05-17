import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-video-learning',
  templateUrl: './video-learning.component.html',
  styleUrls: ['./video-learning.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VideoLearningComponent implements OnInit {

  tabLinks = [];

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('视频学习');

    this.tabLinks.push({
      url: 'list',
      label: '视频列表'
    }, {
      url: 'records',
      label: '学习记录'
    });
  }

}
