import { TestBed, inject } from '@angular/core/testing';

import { ToolbarMenuService } from './toolbar-menu.service';

describe('ToolbarMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToolbarMenuService]
    });
  });

  it('should ...', inject([ToolbarMenuService], (service: ToolbarMenuService) => {
    expect(service).toBeTruthy();
  }));
});
