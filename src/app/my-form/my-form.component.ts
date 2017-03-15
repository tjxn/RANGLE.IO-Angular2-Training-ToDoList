import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  username: FormControl;
  email: FormControl;
  password: FormControl;
  myForm: FormGroup;

  constructor(private builder: FormBuilder) { 
    this.username = new FormControl('', [Validators.required]);
    this.email = new FormControl('');
    this.password = new FormControl('', [Validators.minLength(8)]);

    const formObject = {
        username: this.username,
        email: this.email,
        password: this.password
    }

    this.myForm = this.builder.group(formObject);

  }

  submitForm(){
    alert('Submit');
    if(this.myForm.invalid){
      alert('invalid');
    }else{
      alert('valid');
    }
  }

  ngOnInit() {
  }

}
