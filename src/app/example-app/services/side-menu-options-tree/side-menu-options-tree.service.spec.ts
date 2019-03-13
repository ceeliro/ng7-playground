import { TestBed } from '@angular/core/testing';

import { SideMenuOptionsTreeService } from './side-menu-options-tree.service';

describe('SideMenuOptionsTreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideMenuOptionsTreeService = TestBed.get(SideMenuOptionsTreeService);
    expect(service).toBeTruthy();
  });
});
