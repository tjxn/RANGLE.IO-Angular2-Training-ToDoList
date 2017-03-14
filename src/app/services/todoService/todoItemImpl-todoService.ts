import {TodoItemI} from '../../shared/todoItemI';


export class ToDoItemImplToDoService implements TodoItemI {
    text: string;
    index: number;
    constructor(text: string, index: number){
        this.index = index;
        this.text = text;
    }

}