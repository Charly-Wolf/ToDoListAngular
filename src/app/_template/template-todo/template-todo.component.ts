import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Eventping } from 'src/app/_interface/eventping';
import { ToDo } from '../../_interface/todo'
import { DataService } from 'src/app/_service/data.service';

@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.sass']
})
export class TemplateTodoComponent {

  @Input() toDo$: ToDo;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public _dataService: DataService
  ) {
    this.toDo$ = {
      id: 1,
      label: 'Beispiel',
      status: false,
      position: 1
    };
  }

  ngOnInit() {
  }

  public changeCheck(event?: any): void {
    this.toDo$.status = !this.toDo$.status;
    const eventObject: Eventping = {
      label: 'check',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

  public changeLabel(event?: any): void {
    const eventObject: Eventping = {
      label: 'label',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }

  public deleteToDo(event?: any): void {
    this._dataService.deleteToDo(this.toDo$).subscribe((data: ToDo) => {
      const eventObject: Eventping = {
        label: 'delete',
        object: this.toDo$
      };
      this.ping.emit(eventObject);
    }, error => {
      console.log(`%cERROR: ${error.message}`, `color: red; font-size: 12px;`);
    })
  }
}
