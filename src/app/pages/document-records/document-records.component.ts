import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-records',
  templateUrl: './document-records.component.html',
  styleUrls: ['./document-records.component.scss']
})
export class DocumentRecordsComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    this.items.push({
      title: '党建学习资料—1',
      time: '2017/05/09 13:55',
      score: '93'
    });
    for(var i = 0; i < 10; i++) {
      this.items.push(this.items[0]);
    }
  }

}
