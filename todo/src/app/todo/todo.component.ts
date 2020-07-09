import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo: Todo
  constructor(
    private todoService:TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this. id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id,'',new Date(),false)
    if(this.id!=-1){
      this.todoService.retrieveTodo('Xolani',this.id).subscribe(
        data => this.todo = data
      );
    }
   
  }
   
  saveTodo(){
    if(this.id===-1){
      this.todoService.createTodo('Xolani',this.todo).subscribe(
        data =>{
          console.log(data),
          this.router.navigate(["todos"])
        }
      )
    }else{
      this.todoService.updateTodo('Xolani',this.id,this.todo).subscribe(
        data =>{
          console.log(data),
          this.router.navigate(["todos"])
        }
      )
    }
  }

}
