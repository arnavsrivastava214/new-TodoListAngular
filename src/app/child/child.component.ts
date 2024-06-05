import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ Input() item:any=[];

  @ Output() emitToParent =  new EventEmitter<any>()

  arnav:boolean = true;
  data:any

  constructor(){}
  ngOnInit(){

  }
  deleteTodo(ind:any){
    this.item.splice(ind,1);
    
  }
  edit(item:any,index:any){
    this.emitToParent.emit(item)
    this.item.splice(index,1);

           
  }

}
