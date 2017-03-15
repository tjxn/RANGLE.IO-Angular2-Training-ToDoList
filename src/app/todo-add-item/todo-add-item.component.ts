import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-add-item',
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent implements OnInit {
  @Output() addNewItem = new EventEmitter<string>();
  addItemControl: FormControl;
  myForm: FormGroup;

  constructor(private builder: FormBuilder) { 

        const formObject = {
          addItemControl: new FormControl('', [Validators.minLength(10), Validators.required] ),
        }

    this.myForm = this.builder.group(formObject);
  }

  ngOnInit() {
  }

  addItem(value:HTMLInputElement){

    alert('Submit');

    if(this.myForm.invalid){
      alert('invalid');
    }else{
      alert('valid');
      this.addNewItem.emit(value.value);
      value.value = "";
    }
  }

}
