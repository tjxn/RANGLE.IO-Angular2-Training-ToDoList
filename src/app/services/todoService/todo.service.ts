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

    addItem(item:TodoItemI): Array<TodoItemI>{
        let todoItemForList = new ToDoItemImplToDoService(item.text, this.todo.length);
        this.todo.push(todoItemForList);
        return this.todo;
    }

    deleteItem(index: number): Array<TodoItemI> {
        this.todo.splice(index, 1);
        return this.todo;
    }

}