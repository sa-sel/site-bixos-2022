import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MoradiasComponent } from './core/moradias/moradias.component'
import { HomeComponent, SobreCursoComponent } from '@core'
import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { BibliotecasComponent } from './core/bibliotecas/bibliotecas.component'
import { MatriculaComponent } from './core/matricula/matricula.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      background: [
        { src: '/assets/images/banner.jpg', alt: 'Membros da SA-SEL em 2019' },
      ],
      logo: {
        src: '/assets/images/logo/subtitle.svg',
        alt: 'Logo da SA-SEL',
      },
    },
  },
  {
    path: 'bibliotecas',
    component: BibliotecasComponent,
    data: {
      background: [
        {
          src: '/assets/images/bibliotecas/banner.jpg',
          alt: 'Foto da biblioteca da EESC, segundo andar',
        },
      ],
    },
  },
  {
    path: 'curso',
    component: SobreCursoComponent,
    data: {
      background: [
        {
          src: '/assets/images/sobre-curso/banner.jpg',
          alt: 'Foto do prédio da SEL, departamento da elétrica',
        },
      ],
    },
  },
  {
    path: 'matricula',
    component: MatriculaComponent,
    data: {
      background: [
        {
          src: '/assets/images/matricula/banner.jpg',
          alt: 'Foto do E1, prédio principal da EESC',
        },
      ],
    },
  },
  {
    path: 'bandejao',
    component: BandejaoComponent,
    data: {
      background: [{ src: '/assets/images/bandejao/banner.jpg', alt: 'Foto do banejão' }],
    },
  },
  {
    path: 'moradias',
    component: MoradiasComponent,
    data: {
      background: [{ src: '/assets/images/moradias/moradias.jpg', alt: 'Foto da USP' }],
    },
  },
  { path: '**', redirectTo: '/' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
