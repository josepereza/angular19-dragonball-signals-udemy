import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
  styleUrl: './dragonball-character-add.component.css'
})
export class DragonballCharacterAddComponent {
  name=signal<string>('')
  power=signal<number>(0)
  newCharacter=output<Character>()
agregar(){
  const newCharacter:Character={
    id:Math.floor(Math.random()*1000),
    name:this.name(),
    power:this.power() 
}
this.newCharacter.emit(newCharacter);
 }
}
