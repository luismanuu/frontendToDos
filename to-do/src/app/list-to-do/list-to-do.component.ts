import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean
  ){}
}

@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})

export class ListToDoComponent implements OnInit {

  todos: Todo[];
  message: string;
 
  constructor(private todoService:ToDoDataService, private router: Router) { 

  }

  ngOnInit() {
    this.getAllTodos();
  }
  getAllTodos(){
    this.todoService.findAll('in28minutes').subscribe(
      response =>{
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response =>{
        console.log(response);
        this.message = "Delete Succesful";
        this.getAllTodos();
      }
    )
  }

  updateTodo(id)
  {
    this.router.navigate(['todos',id]);
  }

  createTodo(){
    this.router.navigate(['todos',-1]);
  }

}
