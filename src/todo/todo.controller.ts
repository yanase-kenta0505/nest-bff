import { Controller, Get } from '@nestjs/common';
import { TodoService } from './todo.service';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs'; 

@Controller('todo')
export class TodoController {
  constructor(private readonly http: HttpService) {}
  
  @Get()
    findAll () {
      const todos =  this.http.get('http://localhost:1337/api/todos/')
      return todos.pipe(map((res) => {
        console.log(res.data)
        return res.data
      }))
    }
}
