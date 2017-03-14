import {Injectable} from '@angular/core';
import {TodoItemI} from '../../shared/todoItemI';
import {ToDoItemImplToDoService} from './todoItemImpl-todoService';

@Injectable()
export class TodoListService {
    todo: Array<ToDoItemImplToDoService> = [];

    contructor(){
    }

    getTodoList(): Array<TodoItemI>{
        return this.todo;
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