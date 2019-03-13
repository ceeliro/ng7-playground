import { Injectable } from '@angular/core';
import { objTree } from '../../../../server/object-tree';
import { of, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/**
 * Node for to-do item
 */
export interface ItemNode {
  id: number;
  text: string;
  expanded: boolean;
  children: ItemNode[];
}

/** Flat to-do item node with expandable and level information */
export interface ItemFlatNode {
  id: number;
  text: string;
  level: number;
  expanded: boolean;
  expandable: boolean;
  selectable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SideMenuOptionsTreeService {

  constructor() {
  }

  index(): Observable<ItemNode[]> {
    return of(objTree).pipe(
      map(res => this._buildFileTree(res, 0))
    );
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `ItemNode`.
   */
  private _buildFileTree(obj: {[key: string]: any}, level: number): ItemNode[] {
    return Object.keys(obj).reduce<ItemNode[]>((accumulator, key) => {
      const item = obj[key];
      const node: ItemNode = Object.keys(item).reduce<ItemNode>((_accumulator, _key) => {
        let value = item[_key];
        if (_key === 'items') {
          value = this._buildFileTree(value, level + 1);
          _key = 'children';
        }
        const acc = {..._accumulator};
        acc[_key] = value;
        return acc as ItemNode;
      }, {} as any);

      return accumulator.concat(node);
    }, []);
  }
}
