import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import { SanitizeHtmlPipe } from '@pipes'
import {
  AlternatingLayoutComponent,
  BannerComponent,
  ImageGridComponent,
  LogoComponent,
  SocialMediaIconComponent,
  TitleComponent,
} from '@shared'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './core/home/home.component'
import { ModalComponent } from './shared/modal/modal.component'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { BannerRouterComponent } from './core/banner-router/banner-router.component'
import { MatriculaComponent } from './core/matricula/matricula.component'
import { BandejaoComponent } from './core/bandejao/bandejao.component'

@NgModule({
  declarations: [
    AlternatingLayoutComponent,
    AppComponent,
    FooterComponent,
    BannerComponent,
    ImageGridComponent,
    LogoComponent,
    ModalComponent,
    NavbarComponent,
    SanitizeHtmlPipe,
    SocialMediaIconComponent,
    TitleComponent,
    HomeComponent,
    BannerRouterComponent,
    MatriculaComponent,
    BandejaoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
