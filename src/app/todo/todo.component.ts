import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  todo$: Observable<any>;

  constructor(private store: Store<any>) {
    this.todo$ = this.store.select('todoStore');
  }
}
