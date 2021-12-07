
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: { title: string; }) {
    return this.http.post('...', todo);
  }

  getTodos() { 
    return this.http.get('...');
  }

  delete(id: string) {
    return this.http.delete('...');
  }
}