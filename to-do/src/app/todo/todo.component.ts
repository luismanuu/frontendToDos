import { Component, OnInit } from '@angular/core';
import { ToDoDataService } from '../service/data/to-do-data.service';
import { Todo } from '../list-to-do/list-to-do.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number;
  todo: Todo;
  constructor(private todoService: ToDoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false);
    if(this.id!=-1){
      this.todoService.findTodo('in28minutes', this.id)
      .subscribe(
        data => this.todo = data
      )
    }
    
  }

  saveTodo(){
    if(this.id == -1){
      this.todoService.createTodo('in28minutes', this.todo)
      .subscribe(
        data => {console.log(data)
          this.router.navigate(['todos'])
        }
      )
    }
    else{
    this.todoService.updateTodo('in28minutes', this.id, this.todo)
    .subscribe(
      data => {console.log(data)
        this.router.navigate(['todos'])
      }
    )
    }
  }

}
