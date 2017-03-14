import { Component, OnInit } from '@angular/core';

interface ItodoItem {

}

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  public todoList: Array<string> = ['test', 'check'];
  constructor() { }

  ngOnInit() {
  }

  addToList(value:string){
    this.todoList.push(value);
  }

  deleteItem(index:number){
    this.todoList.splice(index, 1);

  }


}
