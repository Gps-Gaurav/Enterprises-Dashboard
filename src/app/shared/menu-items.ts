import { Injectable, inject } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  icon: string;
  role: string;

}

const MENUITEMS = [
  { state: 'dashboard', name: 'dashboard', icon: 'dashboard', role: '' },
  { state: 'Category', name: 'manage Category', icon: 'category', role: 'admin' }

];

@Injectable()
export class MenuItems {
  getMenuitems(): Menu[] {
    return MENUITEMS;

  }
}

