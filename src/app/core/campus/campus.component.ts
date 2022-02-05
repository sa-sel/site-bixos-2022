import { Component } from '@angular/core'
import { AlternatingLayoutModel } from 'models/alternating-layout.model'

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
})
export class CampusComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      text: 'Todos os veteranos já foram bixos e se perderam pelo menos uma vez na universidade; falar que um bixo é perdido é como falar que a água é molhada. Porém o importante é uma hora acertar o caminho, por isso que estamos disponibilizando algumas dicas para ajudá-lo(a) a se localizar na USP - São Carlos.<br><br>Primeiramente é importante saber que existem dois campus da USP em São Carlos, o campus 1 no centro da cidade, este será o local que você realizará a matrícula, passará pela semana de recepção e terá a maioria das suas aulas.',
    },
    /* {
      image: {
        alt: 'Prédio E1',
        src: '/assets/images/campus/Prédio_E1.png',
        caption: 'Prédio administrativo E1, no campus 1',
      },
    },
    {
      image: {
        alt: 'Prédio Eng. Elétrica e Comp',
        src: '/assets/images/campus/Prédio_Eng_Elétr_Comp.png',
        caption: 'Prédio da engenharia elétrica e computação, no campus 1',
      },
    },
    {
      image: {
        alt: 'Entrada Arquitetura',
        src: '/assets/images/campus/Entrada_Arquitetura.png',
        caption: '"Entrada da arquitetura", no campus 1',
      },
    },
    {
      image: {
        alt: 'Sala Bloco D',
        src: '/assets/images/campus/Sala_Bloco_D.png',
        caption: 'Uma sala de aula no bloco D, no campus 1',
      },
    }, */
    {
      text: 'E o campus 2 que se encontra em uma região mais afastada da cidade e concentra a graduação de alguns cursos como Eng. de Computação, Ambiental e Materiais, no entanto você provavelmente terá as aulas de laboratório de física e química lá, portanto também é importante conhecê-lo para evitar ficar perdido.<br><br>',
    },
    {
      text: 'Quer ver mais fotos do CAASO?<br> Confira no álbum <a target="_blank" rel="noopener noreferrer" href="https://photos.app.goo.gl/3msA5jNUZwsLsUa58">"USP - São Carlos"</a>!',
    },
  ]

}
