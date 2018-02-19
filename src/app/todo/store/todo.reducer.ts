import {Todo} from '../todo';

import * as TodoActions from './todo.actions';

export interface TodoState {
  todos: Array<Todo>;
  loading: boolean;
  loaded: boolean;
}

export const initialState: TodoState = {
  todos: [],
  loading: true,
  loaded: false
};

export function TodoReducer(state = initialState, action: TodoActions.All) {

  switch (action.type) {
    case TodoActions.LOAD:
      return {
        loading: true,
        loaded: false,
        ...state,
        todos: []
      };

    case TodoActions.LOADED:
      return {
        loading: false,
        loaded: true,
        ...state.todos,
        todos: action.payload
      };

    case TodoActions.FAILED:
      return {
        err: 'bad api call',
        loading: false,
        loaded: true,
        ...state.todos,
        todos: []
      };

    default:
      return state;
  }
}
