import { Component, OnInit,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css']
})
export class EdittodoComponent implements OnInit {
  @Output() editToDo = new EventEmitter<{
    name: String,
    category: String,
    status: Boolean
  }>();

  name: string = "";
  category: string = "";
  status: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmitClicked() {
    this.editToDo.emit({
      name: this.name,
      category: this.category,
      status: this.status
    });
  }

  clearSearch() {
    this.name = null;
    this.category=null;
    this.status=null;
    }


}

