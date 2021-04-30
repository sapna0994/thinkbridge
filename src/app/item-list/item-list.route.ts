import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item-list.component';

const itemListRoutes: Routes = [
  { path: '', component: ItemListComponent }
];
export const itemListRouting: ModuleWithProviders<any> = RouterModule.forChild(itemListRoutes);
