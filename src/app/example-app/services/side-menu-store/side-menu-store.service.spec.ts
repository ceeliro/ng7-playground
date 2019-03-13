import { TestBed } from '@angular/core/testing';

import { SideMenuStoreService } from './side-menu-store.service';

describe('SideMenuStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideMenuStoreService = TestBed.get(SideMenuStoreService);
    expect(service).toBeTruthy();
  });
});
