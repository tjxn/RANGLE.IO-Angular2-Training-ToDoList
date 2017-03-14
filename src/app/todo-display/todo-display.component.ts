import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todoService/todo.service';
import { TodoItemI } from '../shared/todoItemI';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  public todoList: Array<TodoItemI> = [];

  constructor(private todoService:TodoListService) {
    this.todoService.getTodoList().subscribe(response =>  {
      return this.todoList = response});
   }

  ngOnInit() {
  }

  addToList(value:string){
     this.todoList = this.todoService.addItem(value);
  }

  deleteItem(index:number){
    this.todoList = this.todoService.deleteItem(index);
  }


}
