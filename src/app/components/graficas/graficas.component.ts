import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  recorridoSumatoria = [];
  posicion = [];
  
  generarValores(){
    let inicioXN=0;
    let finXN = 4;
    let inicioHN = 0;
    let finHN = -5;
    let valorHN = 1
    let resultadosUno = [];
    let resultadosDos = [];
    let resultadosTres = [];
    
   
    for(let i = inicioXN; i <= finXN; i++){
      this.posicion.push(i);
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
      this.recorridoSumatoria.push(suma);
    }
    let resta = suma;
    for(let i = 0; i < resultadosUno.length ; i++){
      resta = resta - resultadosUno[i];
      console.log('Restando en '+i +' = '+ resta);
      this.recorridoSumatoria.push(suma);
    }
    console.log(this.recorridoSumatoria);
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
  
  

  public lineChartData: ChartDataSets[] = [
    { data: this.recorridoSumatoria, label: 'Valores Función' },];
  public lineChartLabels: Label[] = this.posicion;
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor() { 
    this.generarValores();    
  }

  ngOnInit(): void {
    
  }



}
