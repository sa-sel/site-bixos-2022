import { Component } from '@angular/core'
import { ImageModel } from '@models'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  openModal = false

  image1: ImageModel = {
    src: '../../../assets/images/banner.jpg',
    alt: 'uma foto da comissao',
  }

  toggleModal() {
    this.openModal = !this.openModal
  }

  image2: ImageModel = {
    src: 'https://pixy.org/src2/600/6007103.jpg',
    alt: 'imagem teste',
  }

  image3: ImageModel = {
    src: '/assets/images/logo/subtitle.svg',
    alt: 'uma logo qualquer',
  }
}
