import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'

const routes: Routes = [
  { path: '', component: HomeComponent },
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
