import {Injectable} from '@angular/core';
import {TodoItemI} from '../../shared/todoItemI';
import {ToDoItemImplToDoService} from './todoItemImpl-todoService';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TodoListService {
    todo: BehaviorSubject<Array<TodoItemI>>;
    state: Array<TodoItemI>;

    constructor(private http: Http){
        this.state = [];
        this.todo = new BehaviorSubject([]);
        this.initToDo()
        .subscribe(response => {
            this.state = response;
            this.todo.next(this.state);
        });
            
    }

    getTodoList(){
        return this.todo;
    }


    initToDo(){
        return this.http
        .get("http://www.json-generator.com/api/json/get/cpZJxAojhe")
        .map( response => {
            return response.json();
        })
        .map(response => response.filter(x => x.problem != true));
    }

    addItem(text:string){
        this.state.push(new ToDoItemImplToDoService(text, 1));
        this.todo.next(this.state);
    }

    deleteItem(index: number) {
        this.state.splice(index, 1);
        this.todo.next(this.state);
 
    }


}