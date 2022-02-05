import { Component } from '@angular/core'
import { ImageGridItemModel } from '@models'

@Component({
  selector: 'app-servicos-academicos',
  templateUrl: './servicos-academicos.component.html',
})
export class ServicosAcademicosComponent {
  openModal = false

  benefitsList: ImageGridItemModel[] = [
    {
      image: {
        src: '/assets/images/servicos-academicos/autodesk.jpeg',
        alt: 'Logo da Autodesk',
        caption: 'Autodesk',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/autodesk.jpeg',
          alt: 'Logo da Autodesk',
        },
        text: 'Tendo uma conta na Autodesk, a mesma oferece um ano de acesso educacional a produtos e serviços da plataforma, podendo necessitar envio de documento para confirmação de matrícula dentro de 48 horas após o início do pedido.',
        title: 'Autodesk',
        url: 'https://www.autodesk.com.br/education/edu-software/overview?sorting=featured&filters=individual',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/canva.png',
        alt: 'Logo da Canva Pro',
        caption: 'Canva Pro',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/canva.png',
          alt: 'Logo da Canva Pro',
        },
        text: 'Aqueles que adquirem o pacote de desenvolvedor de aluno do GitHub também podem obter um ano de acesso gratuito ao Canva Pro. Para isso basta entrar no link abaixo, fazer o login e vincular com sua conta do GitHub.',
        title: 'Canva Pro',
        url: 'http://bit.ly/CanvaProEducation',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/coursera.png',
        alt: 'Logo da Coursera',
        caption: 'Coursera',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/coursera.png',
          alt: 'Logo da Coursera',
        },
        text: 'Alunos USP têm acesso a cursos online e certificados gratuitos na plataforma Coursera com o e-mail institucional.',
        title: 'Coursera',
        url: 'https://www.coursera.org/',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/dell.png',
        alt: 'Logo da Dell',
        caption: 'Dell',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/dell.png',
          alt: 'Logo da Dell',
        },
        text: 'Existem descontos voltados a estudantes para compras de eletrônicos na loja da Dell.Visite a página para saber valores e o passo a passo de como conseguir os descontos.',
        title: 'Dell',
        url: 'http://bit.ly/DescontosDell',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/downdog.png',
        alt: 'Logo do Downdog',
        caption: 'Downdog',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/downdog.png',
          alt: 'Logo do Downdog',
        },
        text: 'Possui aplicativos de Yoga, HIIT, Meditação, Barre e Yoga pré-natal. Usando o e-mail USP, você tem acesso gratuito a todos os aplicativos até dia 1° de julho de 2021.',
        title: 'Downdog',
        url: 'https://www.downdogapp.com/',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/github.png',
        alt: 'Logo do Github',
        caption: 'Github',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/github.png',
          alt: 'Logo do Github',
        },
        text: 'Alunos USP são qualificados para obter o pacote de desenvolvedor de aluno. As informações detalhadas sobre como solicitar esse benefício podem ser encontradas no site.',
        title: 'GitHub Student Developer Pack',
        url: 'http://bit.ly/GitHubStudent',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/gsuite.png',
        alt: 'Logo do GSuite',
        caption: 'GSuite',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/gsuite.png',
          alt: 'Logo do GSuite',
        },
        text: 'Estando logado no e-mail institucional você tem acesso ao Drive ilimitado, ferramentas administrativas adicionais e configurações avançadas do Workspace da Google.',
        title: 'GSuite',
        url: 'https://www.sti.usp.br/cooperacao/google-g-suite-education/',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/jetbrains.png',
        alt: 'Logo do Jetbrains',
        caption: 'Jetbrains',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/jetbrains.png',
          alt: 'Logo do Jetbrains',
        },
        text: 'A empresa de JetBrains desenvolve Ambientes de Desenvolvimento Integrados (IDE), de altíssima qualidade, para as linguagens de programação Java, C/C++, Python, entre outros. Algumas IDEs tem funcionalidades pagas e outras gratuitas, outros são inteiramente pagos. Usando seu email USP, você pode ter acesso a todas essas ferramentas gratuitamente. Esses programas tem uma interface bonita e customizável, além das funcionalidades que você precisa. Ótima escolha para as aulas de programação.',
        title: 'JetBrains',
        url: 'https://www.jetbrains.com/community/education/#students',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/mubi.jpg',
        alt: 'Logo do Mubi',
        caption: 'Mubi',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/mubi.jpg',
          alt: 'Logo do Mubi',
        },
        text: 'Alunos USP têm acesso a plataforma MUBI com desconto na mensalidade para estudantes, de R$27,90 por mês para R$16,90 por mês.',
        title: 'Mubi',
        url: 'https://mubi.com/pt/student',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/notion.png',
        alt: 'Logo do Notion',
        caption: 'Notion',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/notion.png',
          alt: 'Logo do Notion',
        },
        text: 'Aplicativo de organização com grande variedade de ferramentas. Ao se cadastrar com o e-mail USP, você recebe o plano “Personal”. Para ativar o plano “Personal Pro”, basta entrar na sua conta, clicar em “Settings & Members” > “Updates” > “Get free education plan” e criar sua senha.',
        title: 'Notion',
        url: 'https://www.notion.so/',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/office.png',
        alt: 'Logo do Office',
        caption: 'Office',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/office.png',
          alt: 'Logo do Office',
        },
        text: 'A USP oferece a seus alunos e professores acesso gratuito ao pacote office online (Word; Excel; PowerPoint; OneNote; Microsoft Team), assim como um Drive remoto de 1TB, sendo necessário utilizar o e-mail institucional na criação da conta.',
        title: 'Pacote Office',
        url: 'https://www.microsoft.com/en-US/education/products/office',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/pressreader.png',
        alt: 'Logo do Pressreader',
        caption: 'Pressreader',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/pressreader.png',
          alt: 'Logo do Pressreader',
        },
        text: 'A USP oferece aos seus alunos acesso gratuito à plataforma PressReader e seu catálogo com jornais e revistas do mundo inteiro em formato digital. Esse benefício estará disponível até o dia 27 de julho deste ano.',
        title: 'Pressreader',
        url: 'http://bit.ly/PressReaderUSP',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/spotify.png',
        alt: 'Logo do Spotify',
        caption: 'Spotify Premium',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/spotify.png',
          alt: 'Logo do Spotify',
        },
        text: 'Estudantes têm direito a 50% de desconto por um período de 12 meses consecutivos. É possível ativar até três períodos adicionais ao comprovar que ainda está qualificado para receber essa oferta.',
        title: 'Spotify Premium',
        url: 'https://spotify.com',
      },
    },
    {
      image: {
        src: '/assets/images/servicos-academicos/youtube.jpg',
        alt: 'Logo do Youtube',
        caption: 'Youtube Premium',
      },
      modal: {
        image: {
          src: '/assets/images/servicos-academicos/youtube.jpg',
          alt: 'Logo do Youtube',
        },
        text: 'Assim como no Spotify, estudantes recebem descontos tanto para o YouTube Premium quanto para o YouTube Music Premium, sendo necessário fazer uma verificação anual da sua permanência na universidade.',
        title: 'Toutube Premium',
        url: 'https://www.youtube.com/premium/',
      },
    },
  ]
}
