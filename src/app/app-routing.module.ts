import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreathingExerciseComponent } from './components/breathing-exercise/breathing-exercise.component';

const routes: Routes = [
    {path: 'breathing-exercise', component: BreathingExerciseComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
