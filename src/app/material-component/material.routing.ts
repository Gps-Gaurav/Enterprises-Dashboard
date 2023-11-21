import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';



export const MaterialRoutes: Routes = [
  {
    path: 'Category',
    component:ManageCategoryComponent,
    canActivate :[RouteGuardService],
    data :{
      expectedRole:['admin']
    }
  },
  {
    path: 'Product',
    component:ManageProductComponent,
    canActivate :[RouteGuardService],
    data :{
      expectedRole:['admin']
    }
  },
  {
    path: 'order',
    component:ManageOrderComponent,
    canActivate :[RouteGuardService],
    data :{
      expectedRole:['admin','user']
    }
  }
];
