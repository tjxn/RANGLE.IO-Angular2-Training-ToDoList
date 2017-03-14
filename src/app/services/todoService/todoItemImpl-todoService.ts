import {TodoItemI} from '../../shared/todoItemI';


export class ToDoItemImplToDoService implements TodoItemI {
    label: string;
    index: number;
    constructor(label: string, index: number){
        this.index = index;
        this.label = label;
    }

}