import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

interface GraficaIndividual {
  posiciones: Number[],
  valores: ChartDataSets[],
}

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  arregloDeObjetos: GraficaIndividual[] = [];
  recorridoSumatoriaUno = [];
  //Areglo de las todos los puntos a graficar
  posicion = [];
  //Limites de xn siempre inicia en 0
  inicioXN = 0;
  //Valor donde terminará de hacer la convolución
  finXN = 2;
  //Valor inicio hn
  inicioHN = 0;
  //Fin hn
  finHN = -5;
  //Magnitud funcion inversa
  valorHN = 1
  resultadosUno = [];
  resultadosDos = [];
  resultadosTres = [];
  //Inversa
  inversa = [];

  generardata() {

    let i = 0;
    for (i = this.inicioXN; i <= this.finXN; i++) {
      this.posicion.push(i);
      this.resultadosUno.push(this.dataFuncionUno(i));
      this.inversa.push(this.valorHN);
      //console.log(this.inversa.length);
      //console.log(i);     
      this.resultadosDos.push(this.dataFuncionDos(i));
      //console.log(this.resultadosDos);
      //this.resultadosTres.push(this.dataFuncionTres(i));

      //console.log(this.resultadosUno);
      //console.log(this.posicion);
      this.arregloDeObjetos.push({
        posiciones: [i],
        valores: [
          {
            data: [1],
            label: "Valores funcion inversa"
          },
          {
            data: [this.dataFuncionUno(i)],
            label: "Valores funcion Uno"
          },
          {
            data: [this.dataFuncionDos(i)],
            label: "Valores funcion Dos"
          }]
          // {
          //   data: [this.dataFuncionTres(i)],
          //   label: "Valores funcion Tres"
          // },         
      });
    }
    this.arregloDeObjetos.push({
      posiciones: this.posicion,
      valores: [
        {
          data: this.inversa,
          label: "Valores funcion inversa"
        },
        {
          data: this.resultadosUno,
          label: "Valores funcion Uno"
        },
        {
          data: this.resultadosDos,
          label: "Valores funcion Dos"
        },
        ]
    });
    //console.log(this.arregloDeObjetos);

    //Sumatoria de principio a fin
    let suma = 0;
    for (let i = 0; i < this.resultadosUno.length; i++) {
      suma = suma + this.resultadosUno[i];
      //console.log(suma);
      console.log('Sumatoria en posición ' + i + ' = ' + suma);
      this.recorridoSumatoriaUno.push(suma);
    }
    let resta = suma;
    for (let i = 0; i < this.resultadosUno.length - 1; i++) {
      resta = resta - this.resultadosUno[i];
      console.log('Restando el valor en ' + i + ' = ' + resta);
      this.recorridoSumatoriaUno.push(resta);
    }
    //console.log(this.recorridoSumatoriaUno);
  }

  dataFuncionDos(i:Number) {
    //Funcion 2 a la N
    //i es la N     
    const base = 2;
    //console.log((Math.pow(base, -i)));
    return (Math.pow(base, -i));
  }

  dataFuncionUno(i) {
    const alfa = 0.65;
    return (Math.pow(alfa, i));
  }

  dataFuncionTres(i) {
    //Asignamos la funcion dada
  }


  public lineChartData: ChartDataSets[] =
    [{
      data: this.resultadosUno,
      label: 'data Función'
    },];

  public lineChartLabels: Label[] = ['0', '1'];

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: false,
    scales : {
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        // {
        //   id: 'y-axis-1',
        //   position: 'right',
        //   gridLines: {
        //     color: 'rgba(255,0,0,0.3)',
        //   },
        //   ticks: {
        //     fontColor: 'red',
        //   }
        // }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'red',
          borderWidth: 1,
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
    this.generardata();
  }

  ngOnInit(): void {

  }



}
