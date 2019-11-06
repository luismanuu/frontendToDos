import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-to-do/list-to-do.component';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http:HttpClient) { 
  }

  findAll(username){
    //return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
    return this.http.get<Todo[]>(`http://localhost:8080/jpa/users/${username}/todos`)
  }

  findTodo(username, id){
    //return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
    return this.http.get<Todo>(`http://localhost:8080/jpa/users/${username}/todos/${id}`)
  }

  deleteTodo(username, id){
   //return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
   return this.http.delete(`http://localhost:8080/jpa/users/${username}/todos/${id}`)
  }

  updateTodo(username, id, todo){
    //return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)
    return this.http.put(`http://localhost:8080/jpa/users/${username}/todos/${id}`, todo)
  }

  createTodo(username, todo){
    //return this.http.post(`http://localhost:8080/users/${username}/todos/`, todo)
    return this.http.post(`http://localhost:8080/jpa/users/${username}/todos/`, todo)
  }
}
