import { Component } from '@angular/core';
import { Persona } from '../model/persona';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  persona: Persona = new Persona();
  personas: Persona[] = [];

  constructor() { }

  guardarPersona() {
    this.personas.push(this.persona);
    this.persona = new Persona();
  }

  //eliminar una persona del array
  eliminarPersona(persona: Persona) {
    this.personas = this.personas.filter(p => p !== persona);
  }

  //modificar persona del array
  modificarPersona(persona: Persona) {
    this.persona = persona;
    this.eliminarPersona(persona);
  }



}
