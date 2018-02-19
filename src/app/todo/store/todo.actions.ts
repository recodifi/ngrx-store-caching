import { Action } from '@ngrx/store';

import { Todo } from '../todo';

export const LOAD = '[TODO] LOAD';
export const LOADED = '[TODO] LOADED';
export const FAILED = '[TODO] FAILED';

export class Load implements Action {
  readonly type = LOAD;
}

export class Loaded implements Action {
  readonly type = LOADED;

  constructor(public payload: Array<Todo>) { }
}

export class Failed implements Action {
  readonly type = FAILED;
}

export type All
  = Load
  | Loaded
  | Failed;
