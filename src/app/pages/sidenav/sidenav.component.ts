import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links = [];

  constructor() { }

  ngOnInit() {
    this.links.push(
      {url:'/home', text: 'Home', icon: 'explore'},
      {url:'/apps', text: 'Apps', icon: 'apps'},
      {url: '/Widgets', text: 'Widgets', icon: 'photo'}
    )
  }

}
