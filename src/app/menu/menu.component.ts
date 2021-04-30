import {Component, OnInit, ViewChild} from '@angular/core';
// import {MatSidenav} from '@angular/material';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
// @ViewChild('drawer', {static: false}) sidenav: MatSidenav;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));
  isHandsetLandscape$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.HandsetLandscape)
    .pipe(map(result => result.matches));
  isMedium$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Medium)
    .pipe(map(result => result.matches));
  isTablet$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Tablet)
    .pipe(map(result => result.matches));

  addItemPage = false;
  itemListPage = false;

  links = [
    {name: 'Add Item', link: 'add_item', cls: 'new'},
    {name: 'Item List', link: '', cls: 'list'},
  
  ];

  constructor(
  	private breakpointObserver: BreakpointObserver,
    private route: Router
  ) { 
	if (this.route.url === 'add_item') {
	      this.addItemPage = true;
	      this.itemListPage = false; 
	    } else if (this.route.url === '') {
	      this.itemListPage = true;
	      this.addItemPage = false;  
	    }
	}

  ngOnInit(): void {
  }
checkNavigation(cls) {
    if (cls === 'newClass') {
        this.addItemPage = true;
	    this.itemListPage = false; 
    } else if (cls === 'listClass') {
        this.itemListPage = true;
	    this.addItemPage = false; 
    } 
  }
}
