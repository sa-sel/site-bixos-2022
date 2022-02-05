import { Component } from '@angular/core'
import { AlternatingLayoutModel } from 'models/alternating-layout.model'

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
})
export class CampusComponent {
  textAndImageList: AlternatingLayoutModel[] = [
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
  ]
}
