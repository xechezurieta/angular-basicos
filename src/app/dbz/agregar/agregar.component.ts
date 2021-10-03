import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent {

  
  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0
  }
  constructor (private dbzService: DbzService) {}

// @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    if (this.personaje.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarPersonaje(this.personaje)
   // this.onNuevoPersonaje.emit(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0
    }
    console.log("hey")
  } 

 

}
