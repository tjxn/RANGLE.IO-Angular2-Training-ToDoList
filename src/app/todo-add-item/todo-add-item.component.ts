import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent implements OnInit {
  @Output() addNewItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addItem(value:HTMLInputElement){
    this.addNewItem.emit(value.value);
    value.value = "";
  }

}
