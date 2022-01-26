import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FooterComponent, NavbarComponent } from '@core'
import { SanitizeHtmlPipe } from '@pipes'
import {
  BannerComponent,
  ImageGridComponent,
  LogoComponent,
  SocialMediaIconComponent,
  TitleComponent,
  ModalComponent,
  SidebarComponent,
} from '@shared'
import { ModalModule } from 'ngx-bootstrap/modal'
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FooterComponent,
    ImageGridComponent,
    LogoComponent,
    ModalComponent,
    NavbarComponent,
    SanitizeHtmlPipe,
    SocialMediaIconComponent,
    TitleComponent,
    SidebarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
