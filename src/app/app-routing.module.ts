import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  BandejaoComponent,
  BibliotecasComponent,
  CampusComponent,
  HomeComponent,
  IcExtraComponent,
  MatriculaComponent,
  MoradiasComponent,
  PreparacaoEstudosComponent,
  ProjetoAmpereComponent,
  SemanaDeRecepcaoComponent,
  ServicosAcademicosComponent,
  SobreCursoComponent,
} from '@core'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      background: [
        { src: '/assets/images/home/banner.jpg', alt: 'Membros da SA-SEL em 2019' },
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
    path: 'projeto-ampere',
    component: ProjetoAmpereComponent,
    data: {
      background: [
        {
          src: '/assets/images/projeto-ampere/banner.jpg',
          alt: 'Parte de uma aula de física do Projeto Ampere',
        },
      ],
      logo: {
        src: '/assets/images/projeto-ampere/logo.png',
        alt: 'Logo do Projeto Ampere',
      },
    },
  },
  {
    path: 'preparacao-estudos',
    component: PreparacaoEstudosComponent,
    data: {
      background: [
        { src: '/assets/images/preparacao/banner.png', alt: 'Banner da preparacao' },
      ],
    },
  },
  {
    path: 'campus',
    component: CampusComponent,
    data: {
      background: [
        { src: 'assets/images/campus/banner.jpg', alt: 'Evento no campus' },
        { src: 'assets/images/campus/Prédio_E1.png', alt: 'Prédio E1' },
        {
          src: 'assets/images/campus/Prédio_Eng_Elétr_Comp.png',
          alt: 'Prédio Eng. Elétrica e Comp',
        },
        {
          src: 'assets/images/campus/Entrada_Arquitetura.png',
          alt: 'Entrada Arquitetura',
        },
        { src: 'assets/images/campus/Sala_Bloco_D.png', alt: 'Sala Bloco D' },
        { src: 'assets/images/campus/Praça_Campus_2.png', alt: 'Praça Campus 2' },
        {
          src: 'assets/images/campus/Ponto_Ônibus_Campus_2.png',
          alt: 'Ponto de Ônibus Campus 2',
        },
        {
          src: 'assets/images/campus/Bancada_Lab_Fís.png',
          alt: 'Bancada Laboratório de Física',
        },
        {
          src: 'assets/images/campus/Bancada_Lab_Quím.png',
          alt: 'Bancada Laboratório de Química',
        },
      ],
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
        },
      ],
    },
  },
  {
    path: 'ics-extras',
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
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
