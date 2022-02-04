import { AlternatingLayoutModel } from './../../models/alternating-layout.model'
import { Component } from '@angular/core'

@Component({
  selector: 'app-moradias',
  templateUrl: './moradias.component.html',
})
export class MoradiasComponent {
  textAndImageList1: AlternatingLayoutModel[] = [
    {
      image: {
        alt: 'mapa do campus I',
        src: '/assets/images/moradias/entradas.png',
        caption: 'Mapa identificando as principais saídas do Campus I',
      },
      text: '<h3>Entradas da USP</h3><br><br>No campus I, tem 4 entradas principais, apelidadas de acordo com os prédios que estão próximos. São elas: a <b>física</b>, <b>matemática</b>, <b>produção</b>, e <b>arquitetura</b>.<br><br> Elas são frequentemente utilizadas como referência para procurar apartamentos, e repúblicas. Por exemplo, um anúncio pode dizer: <i>"nossa rep está a 700m da saída da ARQ"</i>.<br><br> Tem apartamentos e reps pertos de todas as quatro saídas; a questão é pesquisar e encontrar aquela que é mais conveniente no seu caso!',
    },
    {
      text: '<h3>Alojamento Estudantil no Campus</h3><br><br> Há no Campus cinco blocos de alojamentos, totalizando 252 vagas. Para garantir uma dessas vagas, é necessário passar por uma seleção dos interessados feita por uma comissão, em que o critério a se avaliar é a situação socioeconômica do aluno de graduação. Vale ressaltar que se você escolher o alojamento como moradia, então você não poderá receber o Auxílio Financeiro disponibilizado pela PAPFE (Programa de Apoio à Permanência e Formação Estudantil) e vice-versa, poderá apenas utilizar os outros auxílios disponíveis, como alimentação e transporte. Para mais informações sobre a PAPFE, clique <a href="https://sites.usp.br/sas/papfe/":>aqui</a>.',
    },
  ]
  image1 = {
    image: {
      src: '/assets/images/moradias/aloja1.png',
      alt: 'foto do alojamento',
      caption: 'Bloco do alojamento da USP',
    },
  }
  image2 = {
    image: {
      src: '/assets/images/moradias/aloja2.png',
      alt: 'bloco e',
      caption: 'Bloco E',
    },
  }
  image3 = {
    image: {
      src: '/assets/images/moradias/aloja3.png',
      alt: 'aloja à noite',
      caption: 'Aloja à noite',
    },
  }
  image4 = {
    image: {
      src: '/assets/images/moradias/aloja4.png',
      alt: 'arvore',
      caption: 'Árvore do aloja',
    },
  }
  textAndImageList2: AlternatingLayoutModel[] = [
    {
      text: '<h3>Grupos no Facebook</h3><br><br>Nesses grupos no facebook, você pode encontrar: vagas para repúblicas, vagas para apartamento:<br><br><a href="https://www.facebook.com/groups/moradiaemobilia/">Moradia e Mobília Federal/Caaso</a><br><a href="https://www.facebook.com/groups/republicasdesaocarlos/">Repúblicas de São Carlos - SP</a><br><a href="https://www.facebook.com/groups/moradia.feminina.sanca">Repúblicas femininas de São Carlos</a><br><br>No <a href="https://sp.olx.com.br/regiao-de-ribeirao-preto/regiao-de-sao-carlos/sao-carlos/imoveis/aluguel">OLX</a>, você também consegue encontrar algumas vagas disponíveis de moradias.',
    },
    {
      text: '<h3>Imobiliárias de São Carlos</h3><br><br>Existem diversas imobiliárias e casas ao redor do Campus. As imobiliárias você consegue entrar em contato diretamente pelo site deles. Já as casas você geralmente consegue pelo nosso grupo do Facebook para entrar em contato diretamente com o proprietário. Abaixo estão citadas algumas imobiliárias principais:',
    },
  ]
  imobi1 = {
    image: {
      src: '/assets/images/moradias/imobi1.png',
      alt: 'abias imoveis',
      caption: 'Abias Imóveis',
    },
    url: 'https://www.abiasimoveis.com.br/',
  }
  imobi2 = {
    image: {
      src: '/assets/images/moradias/imobi2.png',
      alt: 'roca',
      caption: 'Imobiliária Roca',
    },
    url: 'https://roca.com.br/',
  }
  imobi3 = {
    image: {
      src: '/assets/images/moradias/imobi3.png',
      alt: 'cardinali',
      caption: 'Imobiliária Cardinali',
    },
    url: 'https://www.cardinali.com.br/',
  }
  imobi4 = {
    image: {
      src: '/assets/images/moradias/imobi4.png',
      alt: 'maria aires',
      caption: 'Maria Aires',
    },
    url: 'https://mariaaires.com.br/',
  }
  imobi5 = {
    image: {
      src: '/assets/images/moradias/imobi5.png',
      alt: 'predial',
      caption: 'Predial Imóveis',
    },
    url: 'https://predialsaocarlos.com/',
  }
  imobi6 = {
    image: {
      src: '/assets/images/moradias/imobi6.png',
      alt: 'união',
      caption: 'Imobiliária União',
    },
    url: 'http://www.iuniaoimoveis.com.br/',
  }
}
