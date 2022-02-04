import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'
import { MatriculaComponent } from './core/matricula/matricula.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      background: [
        { src: '/assets/images/banner.jpg', alt: 'uma foto da comissao' },
        { src: 'https://pixy.org/src2/600/6007103.jpg', alt: 'imagem teste' },
      ],
      logo: {
        src: 'https://freepikpsd.com/file/2019/10/generic-company-logo-png-7-Transparent-Images.png',
        alt: 'uma logo qualquer',
      },
    },
  },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'bandejao', component: BandejaoComponent },
  // { path: 'kit-bixo', component: KitBixoComponent },
  // { path: 'projeto-ampere', component: ProjetoAmpereComponent },
  // { path: 'ic-extras', component: IcExtrasComponent },
  // ...
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
