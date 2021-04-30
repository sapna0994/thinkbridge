import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item.component';

const addItemRoutes: Routes = [
  { path: '', component: AddItemComponent }
];
export const addItemRouting: ModuleWithProviders<any> = RouterModule.forChild(addItemRoutes);
