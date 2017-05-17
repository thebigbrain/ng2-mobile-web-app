import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-micro-training',
  templateUrl: './micro-training.component.html',
  styleUrls: ['./micro-training.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MicroTrainingComponent implements OnInit {

  dialogRef;
  items = [];

  constructor(private title: Title, private dialog: MdDialog) { }

  ngOnInit() {
    this.title.setTitle('微培训');
    this.items.push({
      title: '视频学习',
      content: '结合随堂小测验，快速巩固党建知识。',
      actionText: '去上课',
      url: '/video/list',
      icon: 'assets/icons/video.png'
    }, {
        title: '文件学习',
        content: '在规定时间内阅读文件，不能提前结束学习哦。',
        actionText: '去上课',
        url: '/document/list',
        icon: 'assets/icons/books.png'
      })
  }

  openDialog() {
   this.dialogRef = this.dialog.open(MessageBoardDialogComponent);
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog.component.html',
})
export class MessageBoardDialogComponent implements OnInit {

  text = '';

  constructor(private dialogRef: MdDialogRef<MessageBoardDialogComponent>) { }

  ngOnInit() { }

  onSure () {
    this.dialogRef.close();
  }

}