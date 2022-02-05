import { SobreCursoComponent } from './core/sobre-curso/sobre-curso.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'curso',
    component: SobreCursoComponent,
    data: {
      background: [
        { 
          src: '/assets/images/sobre-curso/banner.jpg', 
          alt: 'Foto do prédio da SEL, departamento da elétrica'
        },
      ],
    },
  },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
