import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../personaservice';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {

  persona=this.formBuilder.group({
    usuario:'',
    password: '',
    name:'',
    surname: '',
    company_email:'',
    personal_email:'',
    city: '',
    active: true,
    created_date: '',
    imagen_url: '',
    termination_date: ''
  })

  constructor(private personaService:PersonaService,   private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.Aniadir(this.persona.value)
    this.persona.reset()
  }



  Aniadir(persona: Persona){
    this.personaService.addPersona(persona)
    .subscribe(data=>{
      alert("Se ha agregado con éxito")
    })
  }

}
