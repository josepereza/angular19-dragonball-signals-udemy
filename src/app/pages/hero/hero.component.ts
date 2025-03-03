import { TitleCasePipe, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
    imports:[TitleCasePipe, UpperCasePipe],
    templateUrl:'./hero-page.component.html'
})
export class HeroComponent{
[x: string]: any;
name=signal('ironman')
age=signal(45)
heroDescription=computed(()=>{
    const description= `${ this.name() } - ${ this.age() }`
    return description;
})


changeHero(){
this.name.set('spiderman')
this.age.set(22)
}
resetForm(){
this.name.set('Ironman')
this.age.set(45)
}
changeAge(){
    this.age.set(60)
}
} 


