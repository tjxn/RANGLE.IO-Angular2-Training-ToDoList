import {TodoItemI} from './todoItemI';


export class ToDoItemImpl implements TodoItemI {
    text: string;
    constructor(text: string){
        this.text = text;
    }

}