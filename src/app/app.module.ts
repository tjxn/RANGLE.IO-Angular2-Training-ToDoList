import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoAddItemComponent } from './todo-add-item/todo-add-item.component';
import { TodoDisplayComponent } from './todo-display/todo-display.component';
import { TodoListService } from './services/todoService/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoAddItemComponent,
    TodoDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
