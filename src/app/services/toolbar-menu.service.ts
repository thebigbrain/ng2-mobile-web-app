import { Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';

let sidenav: MdSidenav;

@Injectable()
export class ToolbarMenuService {

  constructor() { 
    
  }

  register (sn: MdSidenav) {
    sidenav = sn;
  }

  toggle() {
    sidenav.toggle();
  }

}
