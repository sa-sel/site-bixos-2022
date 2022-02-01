import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from '@core'
import { TitleComponent } from '@shared'
import { BannerRouterComponent } from 'core/banner-router/banner-router.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a', component: TitleComponent },
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
