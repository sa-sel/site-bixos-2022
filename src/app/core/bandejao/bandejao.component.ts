import { Component } from '@angular/core'
import { AlternatingLayoutModel } from './../../models/alternating-layout.model'

@Component({
  selector: 'app-bandejao',
  templateUrl: './bandejao.component.html',
})
export class BandejaoComponent {
  textAndImageList: AlternatingLayoutModel[] = [
    {
      image: {
        alt: 'bandeja com comida',
        src: '/assets/images/bandejao/bandeja.png',
        caption: 'Uma bandeja do bandejão dentro do bandejão',
      },
      text: 'Procurando uma refeição balanceada, saudável, e acessível? Conheça o Bandejão, o restaurante universitário do CAASO (o nome é devido à comida ser servida em bandejas de metal).<br><br>Cada refeição custa <strong>2 reais</strong>, e você só pode passar pela fila de alimentos uma vez. Diariamente, no almoço e janta, é servido: opções de salada, arroz e feijão, duas opções de guarnição (com opção vegetariana), duas opções de sobremesa (podendo pegar só uma).',
    },
    {
      image: {
        alt: 'mesas internas do bandejão',
        src: '/assets/images/bandejao/mesas.png',
        caption: 'Mesas de refeição do bandeco',
      },
      text: 'A salada, o arroz, o feijão e o pão podem ser pegos à vontade, porém as guarnições são controladas pelos funcionários, responsáveis por servi-las.<br><br>Para entrar no bandejão é preciso ter créditos na sua carteirinha. O local para recarregar os créditos fica do lado do restaurante, e é aberto no horário do almoço. Então não se esqueça de verificar previamente se você tem créditos, pra não ficar sem janta!',
    },
    {
      text: 'Você também pode gerar um boleto para fazer a recarga pelo <strong><a target="_blank" rel="noopener noreferrer" href="https://portalservicos.usp.br">Portal de Serviços</a></strong>: restaurante universitário → boleto → comprar. Ou pelo aplicativo <strong>Cardápio USP:</strong> ícone de dinheiro no topo superior direito → fazer login → gerar boleto. <br><br>Vale notar que uma vez pago, o valor do boleto pode demorar de 1 a 3 dias para cair na sua conta.',
    },
    {
      image: {
        alt: 'como adicionar creditos na conta',
        src: '/assets/images/bandejao/creditos.png',
        caption: 'Recarga de créditos do bandejão pelo Portal de Serviços',
      },
    },
    {
      image: {
        alt: 'marmitas servidas durante a pandemia',
        src: '/assets/images/bandejao/marmita.png',
        caption: 'Marmitas servidas durante a pandemia',
      },
      text: 'Você pode consultar o cardápio do dia pelo <a target="_blank" rel="noopener noreferrer" href="http://www.puspsc.usp.br/cardapio/">site da prefeitura do campus</a>, pelo aplicativo <a target="_blank" rel="noopener noreferrer" href="https://sites.usp.br/sas/exemplo-de-post-2/">Cardápio USP</a>, ou até mesmo por um <a href="https://t.me/BandejaoBot" target="_blank" rel="noreferrer noopener">bot no telegram</a>.<br><br>Durante o período de pandemia o bandejão estava sendo oferecido por meio de marmitas. Medidas de segurança como oferecimento de álcool em gel e distanciamento estão sendo seguidas.<br><br>Estudantes com dificuldades socioeconômicas podem acessar o auxílio alimentação oferecido pela <a target="_blank" rel="noopener noreferrer" href="http://www.puspsc.usp.br/bolsas-e-auxilios/">prefeitura do campus</a>',
    },
  ]
}
