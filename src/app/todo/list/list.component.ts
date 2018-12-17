import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todos;
  @Output() addNewToDoButtonClicked = new EventEmitter();
  @Output() editButtonClicked= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewButtonClick(){
    this.addNewToDoButtonClicked.emit();
  }

  deleteFieldValue(todo) {
    this.todos = this.todos.filter(t => t.name !== todo.name);
    }

    onEditButtonClick(){
      this.editButtonClicked.emit();
    }

}
