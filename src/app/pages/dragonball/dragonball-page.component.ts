import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
    id:number,
    name:string,
    power:number
}
@Component({
    imports:[NgClass],
    templateUrl:'./dragonball-page.component.html'
  
})
export class DragonballPageComponent{
    name=signal<string>('')
    power=signal<number>(0)
characters=signal<Character[]>([
    {id:1,name:"Goku", power:9001},
    {id:2,name:"Vegeta", power:5001},
   


])
powerClasses=computed(()=>{
    return {'text-danger':true}
})
agregar(){
const newCharacter:Character={
    id:this.characters().length +1,
    name:this.name(),
    power:this.power() 
}
this.characters.update(list=>[...list,newCharacter])
}
}
