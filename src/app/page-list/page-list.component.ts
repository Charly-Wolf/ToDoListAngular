import { Component } from '@angular/core';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;

  constructor() { 
    this.toDoShow = true;
    this.toDoDoneShow = false;
  }

  ngOnInit() {

  }
}
