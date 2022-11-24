import { Component } from '@angular/core';
import { ToDo } from 'src/app/_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent {

  public toDo$: ToDo;

  constructor() {
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }

  ngOnInit() {
  }

  public createToDo(event?: any): void {
    //Send this to the server - DB
    console.log(this.toDo$);
    //Reset object after a toDo was created and sent to the server
    this.toDo$ = {
      id: undefined,
      label: undefined,
      status: false,
      position: undefined
    }
  }
}
