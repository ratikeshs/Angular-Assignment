import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {
  @Input() categories;
  @Output() categoryButtonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onCategoryButtonClick(){
    this.categoryButtonClicked.emit();
  }

}
