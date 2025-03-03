import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { HeroComponent } from './pages/hero/hero.component';
import {  DragonballPageComponent } from './pages/dragonball/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: CounterComponent },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path:'dragonball-super', component:DragonballSuperPageComponent
  },
  {
    path:'dragonball', component:DragonballPageComponent
  },
   
  {
    path:'**', redirectTo:'hero', pathMatch:'full'
  },
];
