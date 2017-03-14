import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todoService/todo.service';
import { ToDoItemImpl } from '../shared/todoItemImpl';

@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  public todoList: Array<ToDoItemImpl> = [];
  constructor(private todoService:TodoListService) { }

  ngOnInit() {
  }

  addToList(value:string){
     this.todoList = this.todoService.addItem(new ToDoItemImpl(value));
  }

  deleteItem(index:number){
    this.todoList = this.todoService.deleteItem(index);
  }


}
