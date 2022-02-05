import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'
import { IcExtraComponent } from 'core/ic-extra/ic-extra.component'
import { BandejaoComponent } from './core/bandejao/bandejao.component'
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
    path: 'ic-extracurriculares',
    component: IcExtraComponent,
    data: {
      background: [
        { src: '/assets/images/ic-extra/ic-extra.png', alt: 'Foto de um gradiente' },
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
