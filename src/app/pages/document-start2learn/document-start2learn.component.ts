import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-document-start2learn',
  templateUrl: './document-start2learn.component.html',
  styleUrls: ['./document-start2learn.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentStart2learnComponent implements OnInit {

  textTitle = '学习资料标题';

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('文件学习');
  }

}
