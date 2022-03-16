import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ListaPersona, Persona } from './persona';


@Injectable({
  providedIn: 'root',
})
export class PersonaService {

  constructor(private http:HttpClient, private messageservice:MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private personasUrl = 'http://localhost:8080/persona';  // URL to web api

  private url='http://localhost:8080/'

  getPersonas(): Observable<ListaPersona>{

    return this.http.get<ListaPersona>(this.personasUrl)
      .pipe(
        tap(_ => this.log('fetched personas')),
        catchError(this.handleError<ListaPersona>('getPersonas',{lista:[]}))
      )
      
  }

  addPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(this.url,persona, this.httpOptions).pipe(
      tap((newPersona: Persona)=> this.log(`Añadida persona w/ id=${newPersona.id_persona}`)),
      catchError(this.handleError<Persona>('addPersona'))
    )
  }

  private log(message: string) {
    this.messageservice.add(`Persona: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}