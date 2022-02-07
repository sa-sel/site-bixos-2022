import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  BannerRouterComponent,
  BandejaoComponent,
  BibliotecasComponent,
  CampusComponent,
  FooterComponent,
  GroupsPanelComponent,
  HomeComponent,
  IcExtraComponent,
  MatriculaComponent,
  MoradiasComponent,
  NavbarComponent,
  PreparacaoEstudosComponent,
  SemanaDeRecepcaoComponent,
  ServicosAcademicosComponent,
  SidebarComponent,
  SobreCursoComponent,
  ProjetoAmpereComponent,
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

@NgModule({
  declarations: [
    AlternatingLayoutComponent,
    AppComponent,
    BandejaoComponent,
    BannerComponent,
    BannerRouterComponent,
    BibliotecasComponent,
    CampusComponent,
    FooterComponent,
    GroupsPanelComponent,
    HomeComponent,
    IcExtraComponent,
    ImageGridComponent,
    LogoComponent,
    MatriculaComponent,
    ModalComponent,
    MoradiasComponent,
    NavbarComponent,
    PreparacaoEstudosComponent,
    SanitizeHtmlPipe,
    SemanaDeRecepcaoComponent,
    ServicosAcademicosComponent,
    SidebarComponent,
    SobreCursoComponent,
    SocialMediaIconComponent,
    TitleComponent,
    HomeComponent,
    BibliotecasComponent,
    ProjetoAmpereComponent,
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
