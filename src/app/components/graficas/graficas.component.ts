import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  constructor() { 
    this.generarValores();    
  }

  ngOnInit(): void {
    
  }

  generarValores(){
    let inicioXN=0;
    let finXN = 4;
    let inicioHN = 0;
    let finHN = -5;
    let valorHN = 1
    let resultadosUno = [];
    let resultadosDos = [];
    let resultadosTres = [];
    let posicion = [];
    let recorridoSumatoria = [];
    for(let i = inicioXN; i <= finXN; i++){
      posicion.push(i);
      resultadosUno.push(this.valoresFuncionUno(i));      
      resultadosDos.push(this.valoresFuncionDos(i));      
      resultadosTres.push(this.valoresFuncionTres(i));            
    }
    
    //console.log(posicion);
    //console.log(resultadosUno);
    //console.log(resultadosDos);
    //console.log(resultadosTres);
    //Sumatoria de principio a fin
    let suma = 0;
    for(let i = 0 ; i < resultadosUno.length; i++){
      suma = suma + resultadosUno[i];
      console.log(suma);
      console.log('Sumatoria en posición '+i + ' = '+suma);
      recorridoSumatoria.push(suma);
    }
    let resta = suma;
    for(let i = 0; i < resultadosUno.length ; i++){
      resta = resta - resultadosUno[i];
      console.log('Restando en '+i +' = '+ resta);
      recorridoSumatoria.push(suma);
    }
    console.log(recorridoSumatoria);
  }

  valoresFuncionDos(i){ 
    //El valor que asignemos a alfa entre 0 y 1
    //Ej 0.5 , 0.7   
    const base = 2;    ;    
    return (Math.pow(2,i));    
  }

  valoresFuncionUno(i){
    const alfa = 0.5;        
    return(Math.pow(alfa,i));
  }

  valoresFuncionTres(i){
    //Asignamos la funcion dada
  }

}
