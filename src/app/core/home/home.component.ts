import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  sponsorsImages: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/home/abias.svg',
        alt: 'abias',
        caption: 'Abias Imóveis',
      },
      url: 'https://www.abiasimoveis.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/ca-and-ma.svg',
        alt: 'Ca and Ma',
        caption: 'Ca and Ma',
      },
      url: 'http://caandma.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/cicbeu.svg',
        alt: 'CICBEU',
        caption: 'CICBEU',
      },
      url: 'http://www.cicbeu.com.br/',
    },
  ]
  constructor(public sidebarService: SidebarService) {}
}
