import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent, IcExtraComponent, SobreCursoComponent } from '@core'
import { ServicosAcademicosComponent } from 'core/servicos-academicos/servicos-academicos.component'
import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { BibliotecasComponent } from './core/bibliotecas/bibliotecas.component'
import { MatriculaComponent } from './core/matricula/matricula.component'
import { MoradiasComponent } from './core/moradias/moradias.component'
import { SemanaDeRecepcaoComponent } from './core/semana-de-recepcao/semana-de-recepcao.component'


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
    path: 'semana-de-recepcao',
    component: SemanaDeRecepcaoComponent,
    data: {
      background: [
        {
          src: '/assets/images/semana-de-recepcao/banner.png',
          alt: 'Foto de uma gincana da semana de recepção',
      ],
    },
  },
  {
    path: 'ic-extra',
    component: IcExtraComponent,
    data: {
      background: [
        { src: '/assets/images/ic-extra/ic-extra.jpg', alt: 'Foto de um gradiente' },
      ],
    },
  },
  {
    path: 'servicos-academicos',
    component: ServicosAcademicosComponent,
    data: {
      background: [
        {
          src: '/assets/images/servicos-academicos/banner.jpg',
          alt: 'Foto do campus da USP de São Carlos',
        },
      ],
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
      scrollPositionRestoration: 'enabled',
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
