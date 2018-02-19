import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';

import { AppRoutingModule } from './app.routing.module';

import { TodoReducer } from './todo/store/todo.reducer';
import { TodoEffects } from './todo/store/todo.effects';

import { TodoResolver } from './todo/todo.resolver';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ todoStore: TodoReducer }),
    EffectsModule.forRoot([TodoEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    })
  ],
  providers: [TodoResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
