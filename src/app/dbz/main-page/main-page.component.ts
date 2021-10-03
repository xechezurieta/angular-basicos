import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Xabi',
    poder: 1000
  }


  constructor(private dbzservice: DbzService){
    

  }

}
