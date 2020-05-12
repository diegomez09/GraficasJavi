import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GraficasComponent } from './components/graficas/graficas.component';

const routes : Routes = [
  { path: 'graficas', component: GraficasComponent  },
  { path: '**', redirectTo: 'graficas', pathMatch: 'full'  },
]

@NgModule({ 
  imports: [
    CommonModule,
    RouterModule.forRoot((routes))
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
