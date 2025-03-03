import { Component, computed, input } from '@angular/core';
import { Character } from '../../../interfaces/character';
import { NgClass } from '@angular/common';

@Component({
  selector: 'dragonball-character-list',
  imports: [NgClass],
  templateUrl: './dragonball-character-list.component.html',
  styleUrl: './dragonball-character-list.component.css'
})
export class DragonballCharacterListComponent {
characters=input.required<Character[]>()
titulo=input.required<string>()
powerClasses=computed(()=>{
  return {'text-danger':true}
})
}
