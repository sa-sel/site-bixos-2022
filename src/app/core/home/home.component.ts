import { Component, OnInit, Input } from '@angular/core'
import { ImageGridItemModel,  SocialMedia, SocialMediaModel  } from '@models'

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
    },
    {
      image: {
        src: '/assets/images/home/candma.svg',
        alt: 'candma',
        caption: 'Candma',
      },
    },
    {
      image: {
        src: '/assets/images/home/cicbeu.svg',
        alt: 'cicbeu',
        caption: 'CICBEU',
      },
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
}
/*
  textAndImageList = [
    {
      image: {
        alt: 'banner',
        src: '../assets/images/banner.jpg',
        caption: 'Teste',
      },
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    },
    {
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    },
    {
      image: {
        alt: 'banner',
        src: '../assets/images/banner.jpg',
        caption: 'Teste',
      },
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    },
    {
      image: {
        alt: 'banner',
        src: '../assets/images/banner.jpg',
        caption: 'Teste',
      },
    },
    {
      image: {
        alt: 'banner',
        src: '../assets/images/banner.jpg',
      },
    },
    {
      image: {
        alt: 'banner',
        src: '../assets/images/banner.jpg',
        caption: 'Teste',
      },
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum versions of Lorem Ipsum',
    },
  ]

  openModal = false

  image1 = {
    image: {
      src: '../../../assets/images/banner.jpg',
      alt: 'uma foto da comissao',
      caption: 'uma foto da comissao',
    },
    modal: {
      image: {
        src: '../../../assets/images/banner.jpg',
        alt: 'uma foto da comissao',
        caption: 'testinho',
      },
      text: 'oioioitesteeee',
      title: 'OIIIII',
    },
  }

  image2 = {
    image: {
      src: 'https://freepikpsd.com/file/2019/10/generic-company-logo-png-7-Transparent-Images.png',
      alt: 'imagem teste',
      caption: 'imagem teste',
    },
    url: 'https://google.com',
  }

  image3 = {
    image: {
      src: 'https://freepikpsd.com/file/2019/10/generic-company-logo-png-7-Transparent-Images.png',
      alt: 'uma logo qualquer',
    },
    url: 'https://google.com',
  }

  toggleModal() {
    this.openModal = !this.openModal
  }
  */
