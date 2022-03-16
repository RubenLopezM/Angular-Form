import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaFormComponent } from './persona-form/persona-form.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'personas'
  },
  {
    path: 'personas',
    component: PersonasComponent
  },
  {
    path:'add',
    component: PersonaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
