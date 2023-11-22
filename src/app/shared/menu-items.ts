import { Injectable, inject } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  icon: string;
  role: string;

}

const MENUITEMS = [
  { state: 'dashboard', name: 'dashboard', icon: 'dashboard', role: '' },
  { state: 'Category', name: 'manage Category', icon: 'category', role: 'admin' },
  { state: 'Product', name: 'manage Product', icon: 'inventory_2', role: 'admin' },
  { state: 'order', name: 'manage Order', icon: 'list_alt', role:'' },
  { state: 'bill', name: 'View Bill', icon: 'import_contacts', role:'' },
  { state: 'user', name: 'View User', icon: 'people', role:'admin' }

];

@Injectable()
export class MenuItems {
  getMenuitems(): Menu[] {
    return MENUITEMS;

  }
}

