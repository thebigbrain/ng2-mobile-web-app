import { Injectable } from '@angular/core';

let isOpened = true;
let _callbacks = [];

@Injectable()
export class ToolbarMenuService {

  constructor() { 
    
  }

  toggle() {
    isOpened = !isOpened;
    _callbacks.forEach(cb => {
      cb(isOpened);
    });
  }

  onToggle(callback: any) {
    if(callback) {
      _callbacks.push(callback);
    }
  }

}
