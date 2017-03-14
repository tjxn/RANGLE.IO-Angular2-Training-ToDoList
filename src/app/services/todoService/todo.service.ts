import {Injectable} from '@angular/core';
import {TodoItemI} from '../../shared/todoItemI';
import {ToDoItemImplToDoService} from './todoItemImpl-todoService';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoListService {
    todo: Array<ToDoItemImplToDoService> = [];

    constructor(private http: Http){

    }

    getTodoList(): Observable<Array<TodoItemI>>{

        return this.http
        .get("http://www.json-generator.com/api/json/get/ckraFfvtNK")
        .map( response => {
            this.todo = response.json();
            return response.json();
        })
    }

    addItem(text:string): Array<TodoItemI>{
        let todoItemForList = new ToDoItemImplToDoService(text, this.todo.length);
        this.todo.push(todoItemForList);
        return this.todo;
    }

    deleteItem(index: number): Array<TodoItemI> {
        this.todo.splice(index, 1);
        return this.todo;
    }


}