import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListService } from '../services/todoService/todo.service';
import { TodoDisplayComponent } from './todo-display.component';
import { TodoAddItemComponent } from '../todo-add-item/todo-add-item.component'
import { TodoItemComponent } from '../todo-item/todo-item.component'
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';''
import { RouterTestingModule} from '@angular/router/testing';
import { routes } from '../app.module'
import { MenuComponent } from '../menu/menu.component';
import { MyFormComponent } from '../my-form/my-form.component';
import { ObservableTestComponent } from '../observable-test/observable-test.component';

describe('TodoDisplayComponent', () => {
  let component: TodoDisplayComponent;
  let fixture: ComponentFixture<TodoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoDisplayComponent, TodoAddItemComponent,
       TodoItemComponent, MenuComponent, MyFormComponent, ObservableTestComponent ],
      providers: [{provide: TodoListService, useValue: {} },],
      imports: [ ReactiveFormsModule, RouterTestingModule.withRoutes(routes) ]
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
