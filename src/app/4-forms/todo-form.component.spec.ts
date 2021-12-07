import { ControlContainer, FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(component.form.contains("name")).toBeTruthy();
    expect(component.form.contains("email")).toBeTruthy();
  });

  it('should make the name control required', () => {
    const name = component.form.get("name");
    const email = component.form.get("email");

    name?.setValue('');
    expect(name?.valid).toBeFalsy();
  });
});

//1. 시작할 때 formgroup이 생성되어 있어야 한다
//2. 