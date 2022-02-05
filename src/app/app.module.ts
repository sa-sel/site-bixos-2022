import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  BibliotecasComponent,
  FooterComponent,
  GroupsPanelComponent,
  NavbarComponent,
  SidebarComponent,
  SobreCursoComponent,
} from '@core'
import { SanitizeHtmlPipe } from '@pipes'
import {
  AlternatingLayoutComponent,
  BannerComponent,
  ImageGridComponent,
  LogoComponent,
  ModalComponent,
  SocialMediaIconComponent,
  TitleComponent,
} from '@shared'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BandejaoComponent } from './core/bandejao/bandejao.component'
import { BannerRouterComponent } from './core/banner-router/banner-router.component'
import { HomeComponent } from './core/home/home.component'
import { MatriculaComponent } from './core/matricula/matricula.component'
import { MoradiasComponent } from './core/moradias/moradias.component'

@NgModule({
  declarations: [
    AlternatingLayoutComponent,
    AppComponent,
    BandejaoComponent,
    BandejaoComponent,
    BannerComponent,
    BannerRouterComponent,
    BannerRouterComponent,
    BibliotecasComponent,
    FooterComponent,
    GroupsPanelComponent,
    HomeComponent,
    HomeComponent,
    ImageGridComponent,
    LogoComponent,
    MatriculaComponent,
    MatriculaComponent,
    ModalComponent,
    MoradiasComponent,
    NavbarComponent,
    SanitizeHtmlPipe,
    SidebarComponent,
    SobreCursoComponent,
    SocialMediaIconComponent,
    SocialMediaIconComponent,
    TitleComponent,
    TitleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
