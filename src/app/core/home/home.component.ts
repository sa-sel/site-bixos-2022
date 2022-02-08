import { Component, Input } from '@angular/core'
import { ImageGridItemModel, SocialMedia, SocialMediaModel } from '@models'
import { SidebarService } from '@services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  sponsorsPhotos: ImageGridItemModel[] = [
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
        src: '/assets/images/home/candma.svg',
        alt: 'candma',
        caption: 'Candma',
      },
      url: 'http://caandma.com.br/',
    },
    {
      image: {
        src: '/assets/images/home/cicbeu.svg',
        alt: 'cicbeu',
        caption: 'CICBEU',
      },
      url: 'http://www.cicbeu.com.br/',
    },
  ]
  @Input() size = 23
  @Input() color = ''
  ngOnInit(): void {
    this.color = this.color ? `text-${this.color}` : ''
  }

  groups: SocialMediaModel[] = [
    { name: SocialMedia.Facebook, url: 'https://www.facebook.com/sasel.usp' },
    { name: SocialMedia.WhatsApp, url: '+55 (71) 8155-6248' },
    { name: SocialMedia.Discord, url: 'https://github.com/sa-sel' },
  ]

  constructor(public sidebarService: SidebarService) {}
}
