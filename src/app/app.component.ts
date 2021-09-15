import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre       : string = 'Capitan America';
  nombre2      : string = 'roGeR jEsuS roSaRiO heRNandEz';

  arreglo      = [1,2,3,4,5,6,7,8,9,10];

  PI           : number = Math.PI;

  porcentaje   : number = 0.210;

  salario      : number = 1234.5;

  fecha        : Date = new Date();

  activar      : boolean = true;

  valorPromesa = new Promise<string>((resolve) => {
    
    setTimeout(() => {
      resolve('Llego la data');
    }, 4000);

  });


  heroe = {
    nombre: 'Logan',
    clave: 'Paul',
    edad: 300,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

}
