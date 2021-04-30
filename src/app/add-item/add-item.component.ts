import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  itemForm: FormGroup;
  submiting = false;
  constructor(
  	private fb: FormBuilder,
  	private snack: MatSnackBar,
  	private apiService: ApiService)
  	{ 
	  	this.itemForm = this.fb.group({
	      name: ['', Validators.required],
	      description: ['', Validators.required],
	      category: ['', Validators.required],
	      code: ['', Validators.required],
	      price: ['', Validators.required],
	      discount: ['', Validators.required],
	    });
  	}

	get s() {
	    return this.itemForm.controls;
	}

	ngOnInit(): void {
	}
	addNewItem(){
 		this.submiting = true;
 		const itemDetails = {
		    name: this.itemForm.get('name').value,
		    description: this.itemForm.get('description').value,
		    category: this.itemForm.get('category').value,
		    code: this.itemForm.get('code').value,
		    price: this.itemForm.get('price').value,
		    discount: this.itemForm.get('discount').value,
		}
		this.apiService.addItem(itemDetails).subscribe((data) => {
      		if (data.status) {
		       this.submiting = false;
		      	this.snack.open('Item Added Successfully!', 'OK', {
			        duration: 3600
			    });
		      } else {
		        this.snack.open('Error in Add New Item!', 'OK', {
			        duration: 3600
			    });
		        this.submiting = false;
		      }
		});
		this.submiting = false;
	}
}
