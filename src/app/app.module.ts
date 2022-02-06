import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {
  BibliotecasComponent,
  FooterComponent,
  IcExtraComponent,
  NavbarComponent,
  SemanaDeRecepcaoComponent,
  SobreCursoComponent,
} from '@core'
import { SanitizeHtmlPipe } from '@pipes'
import {
  AlternatingLayoutComponent,
  BannerComponent,
  ImageGridComponent,
  LogoComponent,
  SocialMediaIconComponent,
  TitleComponent,
} from '@shared'
import { ServicosAcademicosComponent } from 'core/servicos-academicos/servicos-academicos.component'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { BannerRouterComponent } from './core/banner-router/banner-router.component'
import { HomeComponent } from './core/home/home.component'
import { MatriculaComponent } from './core/matricula/matricula.component'
import { MoradiasComponent } from './core/moradias/moradias.component'
import { ModalComponent } from './shared/modal/modal.component'

@NgModule({
  declarations: [
    AlternatingLayoutComponent,
    AppComponent,
    BandejaoComponent,
    BannerComponent,
    BannerRouterComponent,
    BibliotecasComponent,
    FooterComponent,
    HomeComponent,
    IcExtraComponent,
    ImageGridComponent,
    LogoComponent,
    MatriculaComponent,
    ModalComponent,
    MoradiasComponent,
    NavbarComponent,
    SanitizeHtmlPipe,
    SemanaDeRecepcaoComponent,
    ServicosAcademicosComponent,
    SobreCursoComponent,
    SocialMediaIconComponent,
    TitleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
