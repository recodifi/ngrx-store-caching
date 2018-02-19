import { Effect, Actions } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import * as TodoActions from './todo.actions';

import { Todo } from '../todo';

@Injectable()
export class TodoEffects {

  constructor(private action$: Actions, private http: HttpClient) { }

  @Effect() todo$: Observable<any> = this.action$
    .ofType(TodoActions.LOAD)
    .switchMap(() => {
      return this.http
        .get('https://jsonplaceholder.typicode.com/todos')
        .map((todo: Array<Todo>) => new TodoActions.Loaded( todo ))
        .catch(err => Observable.of(new TodoActions.Failed()));
    });
}
