import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddItemComponent } from './todo-add-item/todo-add-item.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { TodoListService } from './services/todoService/todo.service';
import { ObservableTestComponent } from './observable-test/observable-test.component';
import { TestService } from './observable-test/observable-test.service';
import { MyFormComponent } from './my-form/my-form.component';
import { MenuComponent } from './menu/menu.component';


export const routes: Routes = [
  { path: '', redirectTo: 'forms-demo', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent},
  { path: 'todo-demo/:firstname/:lastname', component: TodoDisplayComponent},
  { path: 'forms-demo', component: MyFormComponent,
    children: [
      { path: '', redirectTo: 'forms-demo', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent},
      { path: 'test', component: ObservableTestComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoAddItemComponent,
    TodoDisplayComponent,
    ObservableTestComponent,
    MyFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoListService,TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
