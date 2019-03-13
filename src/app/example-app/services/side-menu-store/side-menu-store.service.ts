import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideMenuStoreService {

  private readonly _SIDE_MENU_$ = new BehaviorSubject<boolean>(false);
  readonly sideMenu$ = this._SIDE_MENU_$.asObservable();

  constructor() { }

  get isSideMenu() {
    return this._SIDE_MENU_$.getValue();
  }

  set isSideMenu(isSideMenu: boolean) {
    this._SIDE_MENU_$.next(isSideMenu);
  }
}
