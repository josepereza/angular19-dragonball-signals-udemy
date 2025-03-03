import { NgClass } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { DragonballCharacterListComponent } from "../../components/dragonball/dragonball-character-list/dragonball-character-list.component";
import { DragonballCharacterAddComponent } from "../../components/dragonball/dragonball-character-add/dragonball-character-add.component";
import { DragonballService } from "../../services/dragonball.service";

interface Character {
    id:number,
    name:string,
    power:number
}
@Component({
    selector:'dragonball-super',
    imports:[DragonballCharacterListComponent,DragonballCharacterAddComponent],
    templateUrl:'./dragonball-super-page.component.html'
  
})
export class DragonballSuperPageComponent{
  /*   name=signal<string>('')
    power=signal<number>(0) */
dragonballService=inject(DragonballService)
}
