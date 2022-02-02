import { Component } from '@angular/core'

@Component({
  selector: 'app-sobre-curso',
  templateUrl: './sobre-curso.component.html',
})
export class SobreCursoComponent {
  textAndImageList = [
    {
      text: 'Sim! Nós também vamos falar um pouco sobre a graduação. Afinal de contas é uma parte importante da universidade.',
    },
    {
      text: '<h2>"Separação" por Ênfases</h2>',
    },
    {
      image: {
        alt: 'bloco d',
        src: 'assets/images/sobre-curso/bloco-d.jpg',
        caption: 'Bloco D, prédio onde ocorrem diversas aulas da Elétrica',
      },
      text: 'Aqui na USP São Carlos, o curso de Engenharia Elétrica é dividido em duas ênfases: <strong>Sistemas de Energia e Automação</strong> e o de <strong>Eletrônica</strong>. Sendo que cada uma dessas ênfases recebe 50 novos alunos por ano, fazendo com que a Elétrica seja o curso com mais bixos na EESC. <br><br>Vale ressaltar que, apesar dessa separação por ênfase, todos são do mesmo curso, sendo coordenados pela SEL (Departamento de Engenharia Elétrica) e representados pela SA-SEL. Em outras palavras, <strong>estamos todos no mesmo barco</strong>.',
    },
    {
      text: '<h2>Grade Curricular</h2>',
    },
    {
      image: {
        alt: 'bancada laboratorio',
        src: 'assets/images/sobre-curso/laboratorio.png',
        caption: 'Bancada no laboratório de medidas e circuitos',
      },
      text: 'Todos os cursos de Engenharia da EESC passam por um ciclo de <strong>matérias básicas</strong> (básica é diferente de fácil) nos primeiros anos. Nele são apresentados os conceitos elementares de Matemática, Física, Química entre outras matérias para criar a base teórica do que está por vir. Essas matérias são os famosos Cálculo I, II, III, IV, Física I, II, Química Geral, Isostática, Desenho Técnico, Geometria Analítica e Introdução à Programação entre outras. Também tem algumas matérias de introdução teórica ao curso, como Introdução á Engenharia Elétrica e Projetos em Engenharia Elétrica.<br><br>Haverão também algumas matérias básicas de Elétrica, logo no segundo semestre já tem Medidas e Circuitos Elétricos e no segundo ano começa Circuitos Elétricos I e II, Sistemas Digitais, Laboratório de Medidas, Laboratório de Semicondutores, entre algumas outras que os alunos de ambas as ênfases irão fazer.<br><br>No terceiro ano a divisão das ênfases começa a ficar mais clara com a grade curricular dividindo  e focando mais nas matérias específicas. Vocês podem consultar ambas grades curriculares nos links abaixo:<ul><li><a target="_blank" rel="noopener noreferrer" href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=18&codcur=18045&codhab=0&tipo=N">Eletrônica</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://uspdigital.usp.br/jupiterweb/listarGradeCurricular?codcg=18&codcur=18050&codhab=0&tipo=N">Sistemas de Energia e Automação</a></li></ul>',
    },
    {
      text: '<h2>Proposta Do Curso, Projeto Pedagógico e Certificados Especiais</h2>',
    },
    {
      image: {
        alt: 'aula de física',
        src: 'assets/images/sobre-curso/fisica.png',
        caption: 'Uma aula de Física',
      },
      text: 'Aqui seguem alguns links complementares que irão elucidar um pouco sobre a proposta do curso. O principal deles é o Projeto Pedagógico, ele é um documento com todas as informações sobre grade curricular, conhecimentos abrangidos, perfil de graduado, entre vários outros assuntos sobre o curso, ele inclusive fala sobre os Certificados Especiais que você pode adquirir ao longo da graduação conforme a escolha de suas optativas. Também estará linkado as informações sobre o curso encontradas no site da SEL, que de forma resumida descrevem sua proposta.<br><br><ul><li>Eletrônica: <a target="_blank" rel="noopener noreferrer" href="http://www.sel.eesc.usp.br/sel/?page_id=257">Informações</a> <a target="_blank" rel="noopener noreferrer" href="http://www.sel.eesc.usp.br/sel/files_EE/pp_ee.pdf">Projeto Pedagógico</a></li><li>Sistemas de Energia e Automação: <a target="_blank" rel="noopener noreferrer" href="http://www.sel.eesc.usp.br/sel/?page_id=284">Informações</a> <a target="_blank" rel="noopener noreferrer" href="http://www.sel.eesc.usp.br/sel/files_EE/Projeto_Pedagogico_SEA_junho2016.pdf">Projeto Pedagógico</a></li><li><a target="_blank" rel="noopener noreferrer" href="https://eesc.usp.br/graduacao/complementares.php?anchor=certificados_especiais">Certificados e Estudos Especiais</a></ul>',
    },
  ]
}
