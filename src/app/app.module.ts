import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VoteComponent } from './3-setup-and-teardown/vote.component';
import { TodoFormComponent } from './4-forms/todo-form.component';
import { TodosComponent } from './6-services/todos.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
