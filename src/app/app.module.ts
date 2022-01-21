import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TitleComponent } from '@shared'
import { ImageGridComponent } from '@shared'

@NgModule({
  declarations: [AppComponent, TitleComponent, ImageGridComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
