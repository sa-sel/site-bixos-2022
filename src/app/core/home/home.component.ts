import { Component, Input } from '@angular/core'
import { ImageGridItemModel, SocialMedia, SocialMediaModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  sponsorsPhotos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/novo/abias.svg',
        alt: 'abias',
        caption: 'Abias Imóveis',
      },
      url: 'https://www.abiasimoveis.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/novo/ca-and-ma.svg',
        alt: 'Ca and Ma',
        caption: 'Ca and Ma',
      },
      url: 'http://caandma.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/novo/cicbeu.svg',
        alt: 'CICBEU',
        caption: 'CICBEU',
      },
      url: 'http://www.cicbeu.com.br/',
    },
  ]
  constructor(public sidebarService: SidebarService) {}
}
