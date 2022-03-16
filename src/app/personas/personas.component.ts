import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../personaservice';
import { ListaPersona } from '../persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(private personaService: PersonaService, private router:Router) { }

  personas: Persona[]=[]
  

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data:ListaPersona)=>{
      this.personas=(data.lista)
      
    }) 
  }

  NuevaPersona(){
    this.router.navigate(['add'])
  }

  displayedColumns: string[] = ['id', 'usuario'];
  dataSource= this.personas


}
