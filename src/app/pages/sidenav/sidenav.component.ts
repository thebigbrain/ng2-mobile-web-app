import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ToolbarMenuService } from '../../services/toolbar-menu.service';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit, AfterViewInit {

  links = [];
  isOpened = true;
  selectedNav = '';

  @ViewChild(MdSidenav) sideNav: MdSidenav;

  constructor(private tmService: ToolbarMenuService) {

  }

  ngOnInit() {
    this.links.push(
      {
        url: '/home',
        text: 'Home',
        icon: 'explore',
        children: []
      },
      {
        url: '/apps',
        text: 'Apps',
        icon: 'apps',
        children: [
          { text: 'Calander', url: '/apps/calander' },
          { text: 'Media', url: '/apps/media' }
        ]
      },
      {
        url: '/widgets',
        text: 'Widgets',
        icon: 'photo'
      }
    )
  }

  ngAfterViewInit() {
    this.tmService.register(this.sideNav);
  }

  toggleNav(link) {
    this.selectedNav = this.selectedNav == link.url ? '' : link.url;
  }

}
