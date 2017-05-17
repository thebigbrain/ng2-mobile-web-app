import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-document-learning',
  templateUrl: './document-learning.component.html',
  styleUrls: ['./document-learning.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentLearningComponent implements OnInit {

  tabLinks = [];

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('文件学习');

    this.tabLinks.push({
      url: 'list',
      label: '文件列表'
    }, {
      url: 'records',
      label: '学习记录'
    });
  }

}
