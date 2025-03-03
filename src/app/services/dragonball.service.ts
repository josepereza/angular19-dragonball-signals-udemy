import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  constructor() { }
 loadFromLocalStore=():Character[]=>{
  const characters=localStorage.getItem('characters');
  return characters ? JSON.parse(characters): []
}

  characters=signal<Character[]>( this.loadFromLocalStore())

saveToLocalStorage=effect(()=>{
  localStorage.setItem('characters', JSON.stringify(this.characters()))
})

 agregar(character:Character){

this.characters.update(list=>[...list,character])
} 
}
