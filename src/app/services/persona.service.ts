import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndPoint: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  //listar personas
  personas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.urlEndPoint}/personas`);
  }

  //Consumir la api con metodo post para guardar persona
  guardarPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(`${this.urlEndPoint}/guardarpersona`, persona);
  }

  //Consumir la api con metodo put para actualizar persona
  actualizarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.urlEndPoint}/actualizarpersona`, persona)
  }

  //Consumir la api con metodo delete para eliminar persona
  eliminarPersona(id: number): Observable<Persona> {
    return this.http.delete<Persona>(`${this.urlEndPoint}/eliminarpersona/${id}`)
  }
}
