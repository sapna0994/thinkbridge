import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {itemListRouting} from './item-list.route';
import {ItemListComponent, DialogForEditItemComponent} from './item-list.component';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [ItemListComponent, DialogForEditItemComponent],
  imports: [
    CommonModule,
    itemListRouting,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatButtonModule 
  ],
   entryComponents: [DialogForEditItemComponent]
})
export class ItemListModule { }
