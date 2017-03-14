import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() value: string;
  @Input() index: number;
  @Output() deleteAnItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteMe(){
    this.deleteAnItem.emit(this.index);
  }

}
