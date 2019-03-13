import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import {
  ItemFlatNode,
  ItemNode,
  SideMenuOptionsTreeService,
} from '../side-menu-options-tree/side-menu-options-tree.service';

@Injectable({
  providedIn: 'root'
})
export class SideMenuOptionsTreeStoreService {

  private readonly _IS_MULTI_SEL_$ = new BehaviorSubject<boolean>(false);
  readonly isMultiSel$ = this._IS_MULTI_SEL_$.asObservable();

  private readonly _OPTIONS_SEL_$ = new BehaviorSubject<ItemNode[]>(undefined);
  readonly optionsSel$ = this._OPTIONS_SEL_$.asObservable().pipe(
    filter(res => !!res)
  );

  private readonly _OBJ_TREE_$ = new BehaviorSubject<ItemNode[]>(undefined);
  readonly ojbTree$ = this._OBJ_TREE_$.asObservable().pipe(
    filter(res => res !== undefined)
  );

  constructor(private sideMenuOptionsTreeService: SideMenuOptionsTreeService) {
    this.fetchAll();
  }

  get isMultiSel(): boolean {
    return this._IS_MULTI_SEL_$.getValue();
  }

  set isMultiSel(isMultiSel: boolean) {
    this._IS_MULTI_SEL_$.next(isMultiSel);
  }

  get optionsSel(): ItemNode[] {
    return this._OPTIONS_SEL_$.getValue();
  }

  set optionsSel(optionsSel: ItemNode[]) {
    this._OPTIONS_SEL_$.next(optionsSel);
  }

  get objTree(): ItemNode[] {
    return this._OBJ_TREE_$.getValue();
  }

  set objTree(_objTree: ItemNode[]) {
    this._OBJ_TREE_$.next(_objTree);
  }

  private async fetchAll() {
    this.objTree = await this.sideMenuOptionsTreeService.index().toPromise();
  }
}
