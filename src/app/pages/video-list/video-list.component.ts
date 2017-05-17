import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit, AfterViewInit {

  items = [];

  constructor() { }

  ngOnInit() {
    this.items.push({
      title: '党建学习视频—1',
      content: '内容描述内容描述内容描述',
      actionText: '开始学习'
    });

    for (var i = 0; i < 10; i++) {
      this.items.push(this.items[0]);
    }
  }

  ngAfterViewInit() {
    var plyr = window['plyr'];
    // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
    // e.g. just plyr.setup(); and leave it at that if you have no need for events
    var instances = plyr.setup({
      // Output to console
      debug: true
    });
  }

}
