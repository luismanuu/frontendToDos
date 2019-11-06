import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginComponent},
{path: 'welcome', component: WelcomeComponent},
{path: 'todos', component: ListToDoComponent},
{path: 'logout', component: LogoutComponent},
{path: 'todos/:id', component: TodoComponent},
{path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
