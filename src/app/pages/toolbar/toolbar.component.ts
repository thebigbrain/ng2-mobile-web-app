import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarMenuService } from '../../services/toolbar-menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  constructor(private tmService: ToolbarMenuService) { }

  ngOnInit() {
  }

  onSearchFocus($event) {
    console.log($event)
  }

  toggleMenu() {
    console.log(this.tmService)
    this.tmService.toggle();
  }

}
