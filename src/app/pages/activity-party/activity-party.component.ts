import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-activity-party',
  templateUrl: './activity-party.component.html',
  styleUrls: ['./activity-party.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityPartyComponent implements OnInit {

  score = 645;
  tabs = ['全部活动', '报名中', '进行中', '已结束'];
  items = [];

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('党员进社区');
  }

  onSelectChange($event) {
    console.log($event);
  }

}
