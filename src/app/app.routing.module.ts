import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component';

import { TodoResolver } from './todo/todo.resolver';

const appRoutes: Routes = [
  { path: 'home', redirectTo: '/'},
  { path: 'todo', component: TodoComponent, resolve: { TodoResolver } },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
