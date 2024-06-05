import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newTodoListAngular';
  arr: any = [];
  inputValue: any;
  obj: any;
  arnav: boolean = true;
  data: any;

  
  getInputVAlue() {
    this.obj = {
      'value': this.inputValue
    }
    this.arr.push(this.obj)
    this.inputValue = '';
    this.data = this.arr;


  }
  deleteTodo(ind: any) {
    this.arr.splice(ind, 1)
    this.inputValue = ''

  }
  edit(index: any) {
    this.inputValue = this.obj.value;
    this.arr.splice(index, 1)

  }
  parentFunction(data: any) {
    this.inputValue = data

  }

}
