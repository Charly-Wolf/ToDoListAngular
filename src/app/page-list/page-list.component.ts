import { Component } from '@angular/core';
import { ToDo } from '../_interface/todo';
import { Eventping } from '../_interface/eventping';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.sass']
})
export class PageListComponent {

  public toDoShow: boolean;
  public toDoDoneShow: boolean;
  public $todos: ToDo[];
  public $todosdone: ToDo[];

  constructor() { 
    this.toDoShow = true;
    this.toDoDoneShow = false;
    this.$todos = [
      {
        id: 0,
        label: 'Website erstellen',
        status: false,
        position: 1
      },
      {
        id: 1,
        label: 'Design entwickeln',
        status: false,
        position: 2
      }
    ];
    this.$todosdone = [];
  }

  ngOnInit() {

  }

  public create(event: ToDo): void {
    event.position = this.$todos.length + 1;
    this.$todos.push(event);
  }

  public update(event: Eventping): void {
    if (event.label === 'check') {
      console.log(`%c"${event.label}-Event" wurde getriggert. `, `color: green;`)
      if (!event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
        this.$todos.push(event.object);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosdone.push(event.object);
      }
    }
    if (event.label === 'delete') {
      console.log(`%c"${event.label}-Event" wurde getriggert. `, `color: green`);
      if (event.object.status) {
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1);
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }
    if (event.label === 'label') {
      console.log(`%c"${event.label}-Event" wurde getriggert. `, `color: green`);
      if (event.object.status) {
        this.$todosdone.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      } else {
        this.$todos.forEach((toDo: ToDo) => {
          if (toDo.id === event.object.id) {
            toDo.label = event.object.label;
          }
        });
      }
    }
    console.log(this.$todos);
  }
}
