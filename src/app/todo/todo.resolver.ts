import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import * as TodoActions from './store/todo.actions';
import { Todo } from './todo';

@Injectable()
export class TodoResolver implements Resolve<any> {

  todoCache: Array<Todo>;

  constructor(private store: Store<any>) { }

  resolve() {
    if (this.todoCache) {
      return new TodoActions.Loaded(this.todoCache);
    }
    this.store.dispatch(new TodoActions.Load());

    this.store.select('todoStore').subscribe(data => {

      if (!data.err && data.todos.length > 0) {
        this.todoCache = data.todos;
      }
    });
  }
}
