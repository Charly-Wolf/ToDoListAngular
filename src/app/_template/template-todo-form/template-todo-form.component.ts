import { Component, Output, EventEmitter } from '@angular/core';
import { ToDo } from 'src/app/_interface/todo';
import { Eventping } from 'src/app/_interface/eventping';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.sass']
})
export class TemplateTodoFormComponent {

  public toDo$: ToDo;
  @Output() ping: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() {
    this.toDo$ = {
      label: undefined,
      status: false,
      position: undefined
    }
  }

  ngOnInit() {
  }

  public createToDo(event?: any): void {
    //Send this to the server - DB
    this.ping.emit(this.toDo$);
    //Reset object after a toDo was created and sent to the server
    this.toDo$ = {
      label: undefined,
      status: false,
      position: undefined
    }
  }
}
