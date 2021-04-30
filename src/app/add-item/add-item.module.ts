import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {addItemRouting} from './add-item.route';
import {AddItemComponent} from './add-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [AddItemComponent],
  imports: [
    CommonModule,
    addItemRouting,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule
  ]
})
export class AddItemModule { }
