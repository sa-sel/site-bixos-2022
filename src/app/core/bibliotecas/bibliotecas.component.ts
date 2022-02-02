import { Component } from '@angular/core'

@Component({
  selector: 'app-bibliotecas',
  templateUrl: './bibliotecas.component.html',
})
export class BibliotecasComponent {
  introduction = [
    {
      text: '<br><br>Como aluna(o) da USP, você tem direito de acessar livremente qualquer biblioteca independentemente do campus. Cada um dos 5 institutos no campus de São Carlos tem sua própria biblioteca (além de uma presente no campus 2). E devido aos amplos acervos, os materiais recomendados pelos professores geralmente possuem alta disponibilidade (<strike>exceto em semana de prova</strike>), assim, você não precisa se preocupar em comprar livros ou apostilas.',
    },
  ]

  textAndImageList = [
    {
      image: {
        alt: 'acervo de exemplares icmc',
        src: 'assets/images/bibliotecas/acervo.png',
        caption: 'Acervo de exemplares, biblioteca ICMC',
      },
      text: 'Na sua primeira visita a uma biblioteca da USP, você poderá fazer seu cadastro, te permitindo acesso ao empréstimo de livros em qualquer unidade.<br><br>Uma vez feito um empréstimo, você tem o direito de ficar com o livro por 10 dias. Caso ninguém tenha feito uma reserva no livro, você pode o renovar por mais 10 dias (online ou presencialmente). Você pode renovar até 3 vezes, totalizando um total de 40 dias com o livro.<br><br>Após esses 40 dias, você deve devolver o livro presencialmente na biblioteca de origem. Lá é possível, no entanto, emprestá-lo novamente caso não haja ninguém na fila de reserva.<br><br>A punição para o atraso na devolução de livros é a suspensão do direito de fazer novos empréstimos. Para cada dia de atraso, por livro, significa um dia não podendo pegar novos exemplares. Ou seja, atrasou 2 dias e tem 3 livros → 6 dias suspenso.',
    },
    {
      text: 'Você pode pesquisar por livros no acervo, ver e renovar seus empréstimos, e solicitar reserva de um livro indisponível no momento por meio de 2 plataformas.',
    },
    {
      image: {
        alt: 'aplicativo biblioteca usp',
        src: 'assets/images/bibliotecas/aplicativo.png',
        caption: 'Aplicativo Bibliotecas USP',
      },
      text: 'A primeira é pelo aplicativo <a target="_blank" rel="noopener noreferrer" href="http://www.sti.usp.br/appusp/">Bibliotecas USP</a>.',
    },
    {
      image: {
        alt: 'site dedalus usp',
        src: 'assets/images/bibliotecas/dedalus.png',
        caption: 'Página inicial Dedalus',
      },
      text: 'A segunda é o site  <a target="_blank" rel="noopener noreferrer" href="http://dedalus.usp.br/F/24J2UMLMSA1FE9XG6TJ7E1R7Q7QK7QCQXDJ31V5UYEXRH2SR1I-61364?RN=53343508&pds_handle=GUEST">Dedalus</a>, que conta com opções de busca mais avançados.',
    },
    {
      text: '<h2>Salas de Estudos</h2>',
    },
    {
      image: {
        alt: 'interior do aquario',
        src: 'assets/images/bibliotecas/aquario.png',
        caption: 'Interior do Aquário',
      },
      text: 'As bibliotecas da EESC, ICMC, e IFSC possuem salas de estudo 24h. A da EESC fica logo ao lado da biblioteca e é chamada de "aquário".<br><br>Durante o horário de funcionamento das bibliotecas, há também áreas de estudo adicionais. Na biblioteca do ICMC e IFSC, há salas fechadas que podem ser utilizadas por grupos de estudantes.',
    },
    {
      text: '<h2>Pró Aluno</h2>',
    },
    {
      image: {
        alt: 'pro aluno eesc',
        src: 'assets/images/bibliotecas/proaluno.png',
        caption: 'Entrada do Pró Aluno - EESC',
      },
      text: 'Pertinho da biblioteca da EESC e do aquário, está o espaço Pró-Aluno. Lá há 2 salas informatizadas para uso de computadores. Para acessa-los basta fazer login com sua conta USP.<br><br>Cada computador está conectado à impressora do espaço. Todo semestre, cada aluno pode realizar <strong>gratuitamente</strong> a impressão de <strong>100 páginas</strong>.<br><br>No bloco 6 do ICMC, também há salas informatizadas no último andar que podem ser acessadas por alunos.',
    },
  ]

  eesc = {
    image: {
      src: '/assets/images/bibliotecas/eesc.png',
      alt: 'biblioteca eesc',
      caption: 'Biblioteca EESC',
    },
  }

  icmc = {
    image: {
      src: '/assets/images/bibliotecas/icmc.png',
      alt: 'biblioteca icmc',
      caption: 'Biblioteca ICMC',
    },
  }

  ifsc = {
    image: {
      src: '/assets/images/bibliotecas/ifsc.png',
      alt: 'biblioteca ifsc',
      caption: 'Biblioteca IFSC',
    },
  }
}
