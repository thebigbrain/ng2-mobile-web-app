import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ToolbarMenuService } from '../../services/toolbar-menu.service';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  links = [];
  isOpened = true;

  @ViewChild(MdSidenav) sideNav;

  constructor(private tmService: ToolbarMenuService, private _vcr: ViewContainerRef) {
    this.tmService.onToggle((isOpened) => {
      this.isOpened = isOpened;
    });

    console.log(this._vcr)
  }

  ngOnInit() {
    this.links.push(
      {url:'/home', text: 'Home', icon: 'explore'},
      {url:'/apps', text: 'Apps', icon: 'apps'},
      {url: '/Widgets', text: 'Widgets', icon: 'photo'}
    )
  }

}
