import { Component } from '@angular/core'
import { AlternatingLayoutModel, ImageGridItemModel } from '@models'

@Component({
  selector: 'app-moradias',
  templateUrl: './moradias.component.html',
})
export class MoradiasComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      title: 'Entrada da USP',
      subtitle: true,
      image: {
        alt: 'mapa do campus I',
        src: '/assets/images/moradias/entradas.png',
        caption: 'Mapa identificando as principais saídas do Campus I',
      },
      text: 'No campus I, tem 4 entradas principais, apelidadas de acordo com os prédios que estão próximos. São elas: a <b>física</b>, <b>matemática</b>, <b>produção</b>, e <b>arquitetura</b>.<br><br> Elas são frequentemente utilizadas como referência para procurar apartamentos, e repúblicas. Por exemplo, um anúncio pode dizer: <i>"nossa rep está a 700m da saída da ARQ"</i>.<br><br> Tem apartamentos e reps pertos de todas as quatro saídas; a questão é pesquisar e encontrar aquela que é mais conveniente no seu caso!',
    },
  ]

  housingPhotos: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/moradias/aloja1.png',
        alt: 'foto do alojamento',
        caption: 'Bloco do alojamento da USP',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja2.png',
        alt: 'bloco e',
        caption: 'Bloco E',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja3.png',
        alt: 'aloja à noite',
        caption: 'Aloja à noite',
      },
    },
    {
      image: {
        src: '/assets/images/moradias/aloja4.png',
        alt: 'arvore',
        caption: 'Árvore do aloja',
      },
    },
  ]

  realStateAgencies: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/moradias/imobi1.png',
        alt: 'abias imoveis',
        caption: 'Abias Imóveis',
      },
      url: 'https://www.abiasimoveis.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/imobi2.png',
        alt: 'roca',
        caption: 'Imobiliária Roca',
      },
      url: 'https://roca.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/imobi3.png',
        alt: 'cardinali',
        caption: 'Imobiliária Cardinali',
      },
      url: 'https://www.cardinali.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/imobi4.png',
        alt: 'maria aires',
        caption: 'Maria Aires',
      },
      url: 'https://mariaaires.com.br/',
    },
    {
      image: {
        src: '/assets/images/moradias/imobi5.png',
        alt: 'predial',
        caption: 'Predial Imóveis',
      },
      url: 'https://predialsaocarlos.com/',
    },
    {
      image: {
        src: '/assets/images/moradias/imobi6.png',
        alt: 'união',
        caption: 'Imobiliária União',
      },
      url: 'http://www.iuniaoimoveis.com.br/',
    },
  ]
}
