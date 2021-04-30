import {Component, Inject, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {ApiService} from '../services/api.service';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
 displayedColumns: string[] = ['sno', 'name', 'description', 'category', 'code', 'price', 'discount', 'action'];
  dataSource = new MatTableDataSource<items>(item_list);

  @ViewChild(MatPaginator) paginator: MatPaginator;
   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  constructor(
    private dialog: MatDialog,
    private apiService: ApiService,
    private snack: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
 editItem(list) {
   this.dialog.open(DialogForEditItemComponent, {
      width: '590px',
      maxWidth: '94vw',
      disableClose: true,
      data: list
    }).afterClosed().subscribe((res) => {
      if (res === 'ok') { 
      }
    });
 }
 deleteItem(id: number, ind: number, num) {
   if (num === 1) {
      const del = confirm('Are you sure to Delete this Item?');
      if (del) {
        this.apiService.deleteItem({'service_id': id}).subscribe((res) => {
          if (res.status) {
            this.snack.open('Item Deleted Succssfully!', 'OK', {
              duration: 3600,
              horizontalPosition: 'end', verticalPosition: 'top'
            });
            location.reload();
          }
        });
      }
    }
 }
}
export interface items {
  sno: number,
  name: string;
  description: string;
  category: string;
  code: string;
  price: string;
  discount: string;
  action: string;
}
const item_list: items[] = [
 {sno: 1, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 2, name: 'dolo', description: 'paracetamol as the main ingredient.', category: 'P', code: 'PM12', price: '100', discount: '40', action: 'H'},
 {sno: 3, name: 'Paracetamol 2', description: 'Pain Killer 2', category: 'P2', code: 'PC122', price: '100', discount: '10', action: 'H'},
 {sno: 4, name: 'Paracetamol NEW', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 5, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 6, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 7, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 8, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 9, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 10, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 11, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 12, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 13, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 14, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 15, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 16, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 17, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 18, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 19, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
 {sno: 20, name: 'Paracetamol', description: 'Pain Killer', category: 'P', code: 'PC12', price: '10', discount: '1', action: 'H'},
];

@Component({
  selector: 'app-item-list',
  templateUrl: './edit-item-list.html',
  styleUrls: ['./item-list.component.scss']
})

export class DialogForEditItemComponent implements OnInit {
  editItem: FormGroup;
  submiting = false;

  get s() {
    return this.editItem.controls;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogForEditItemComponent>,
    private fb: FormBuilder,
    private apiService: ApiService,
    private snack: MatSnackBar
  ) {
    this.editItem = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      code: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.editItem.setValue({
      name: this.data.name,
      description: this.data.description,
      category: this.data.category,
      code: this.data.code,
      price: this.data.price,
      discount: this.data.discount,
    });
  }
  editNewItem(){
    this.submiting = true;
     const itemDetails = {
        name: this.editItem.get('name').value,
        description: this.editItem.get('description').value,
        category: this.editItem.get('category').value,
        code: this.editItem.get('code').value,
        price: this.editItem.get('price').value,
        discount: this.editItem.get('discount').value,
    }
    this.apiService.editItem(itemDetails).subscribe((data) => {
          if (data.status) {
           this.submiting = false;
            this.snack.open('Item Updated Successfully!', 'OK', {
              duration: 3600
          });
          } else {
            this.snack.open('Error in Updated Item!', 'OK', {
              duration: 3600
          });
            this.submiting = false;
          }
    });
    this.submiting = false;
  }
  closeIt() {
    this.dialogRef.close('notOk');
  }
}