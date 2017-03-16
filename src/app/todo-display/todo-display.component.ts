import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todoService/todo.service';
import { TodoItemI } from '../shared/todoItemI';
import {Observable} from 'rxjs/Rx'
import { Router, RouterModule, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {
  public todoList: Array<TodoItemI>;

  constructor(private todoService:TodoListService, private route: ActivatedRoute,
  private router: Router
  ) {
    this.todoService.getTodoList()
    .subscribe(response => {
      this.todoList = response;
    })
   }

  ngOnInit() {
        this.route.params.subscribe(params => {
      console.log(params);
    })

    this.route.queryParams.subscribe(queryParams => {
      console.log(queryParams);
    })
  }


  goToFormPage(){
    this.router.navigate(['/forms-demo']);
  }
  

  addToList(value:string){
     this.todoService.addItem(value);
  }

  deleteItem(index:number){
    this.todoService.deleteItem(index);
  }


}
