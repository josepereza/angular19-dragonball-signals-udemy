import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
   templateUrl:'./counter.component.html',
   styles:
   `
   button{
    padding:15px;
    margin:5px;
   }
   `,
   
})
export class CounterComponent {
 
    counterSignal=signal(10)
    counter=10

    sumar(value:number){
    this.counter+=value 
    this.counterSignal.update(current=>current+value)
}

    restar(value:number){
        this.counter-=value
      this.counterSignal.update(current=>current-value)
    }

    reset(){
    this.counter=0
    this.counterSignal.set(0)
 }
}