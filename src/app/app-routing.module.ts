import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
    path: 'add_item',
    loadChildren: () => import('./add-item/add-item.module').then(m => m.AddItemModule)
},
{
    path: '',
    loadChildren: () => import('./item-list/item-list.module').then(m => m.ItemListModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
