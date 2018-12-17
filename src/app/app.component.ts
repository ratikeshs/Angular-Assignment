import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  categories = [
    {
      name: 'CDAC'
    },
    {
      name: 'CDAC'
    },
    {
      name: 'CDAC'
    }
  ]

  categoryListPage=false;
  listPage = true;
  formPage = false;
  edittodo = false;


  showCategoryListPage(){
    console.log("hi");
    this.categoryListPage=true;
    this.listPage = true;
    this.formPage = true;
    this.edittodo = true;
  }

}
