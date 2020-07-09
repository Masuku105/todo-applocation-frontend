import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
     public id: number,
     public description: String,
     public targetDate: Date,
     public done: boolean
    
    ) { }
} 

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message: String
  // [
  //   { id: 1, description: 'Play with code' },
  //   { id: 2, description: 'Become an expert' },
  //   { id: 3, description: 'Code even more' },
  //   { id: 3, description: 'Join Coding Forums' }
  // ]

  constructor(
    private todoDataService:TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }
  refreshTodos(){
    this.todoDataService.retrieveAllTodos('Xolani').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
    console.log(`Deleted todo ${id}`);
    this.todoDataService.delete('Xolani',id).subscribe(
      response => {
        console.log(response);
        this.message = `Todo ${id} Successfully deleted`;
        this.refreshTodos();
      }
    );
  }

  updateTodo(id){
    console.log(`Update button clicked ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    console.log(`add button clicked`);
    this.router.navigate(['todos',-1])
  }

}
