import { TestBed } from '@angular/core/testing';

import { SideMenuOptionsTreeStoreService } from './side-menu-options-tree-store.service';

describe('SideMenuOptionsTreeStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideMenuOptionsTreeStoreService = TestBed.get(SideMenuOptionsTreeStoreService);
    expect(service).toBeTruthy();
  });
});
