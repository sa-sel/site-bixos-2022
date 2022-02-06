import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  HomeComponent,
  SobreCursoComponent,
  CampusComponent,
} from '@core'
import { MoradiasComponent } from './core/moradias/moradias.component'
import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { BibliotecasComponent } from './core/bibliotecas/bibliotecas.component'
import { MatriculaComponent } from './core/matricula/matricula.component'
import { ServicosAcademicosComponent } from 'core/servicos-academicos/servicos-academicos.component'

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
    path: 'campus',
    component: CampusComponent,
    data: {
      background: [
        { src: 'assets/images/campus/banner.jpg', alt: 'Evento no campus' },
        { src: 'assets/images/campus/Prédio_E1.png', alt: 'Prédio E1' },
        { src: 'assets/images/campus/Prédio_Eng_Elétr_Comp.png', alt: 'Prédio Eng. Elétrica e Comp' },
        { src: 'assets/images/campus/Entrada_Arquitetura.png', alt: 'Entrada Arquitetura' },
        { src: 'assets/images/campus/Sala_Bloco_D.png', alt: 'Sala Bloco D' },
        { src: 'assets/images/campus/Praça_Campus_2.png', alt: 'Praça Campus 2' },
        { src: 'assets/images/campus/Ponto_Ônibus_Campus_2.png', alt: 'Ponto de Ônibus Campus 2' },
        { src: 'assets/images/campus/Bancada_Lab_Fís.png', alt: 'Bancada Laboratório de Física' },
        { src: 'assets/images/campus/Bancada_Lab_Quím.png', alt: 'Bancada Laboratório de Química' },
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
