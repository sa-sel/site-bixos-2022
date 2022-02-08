import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { SidebarItemModel } from '@models'
import { SidebarService } from '@services'
import * as bootstrap from 'bootstrap'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  route = ''
  fragment = ''
  startsOpen = this.sidebarService.isOpen()
  subscriptions: Subscription[] = []
  sidebar!: bootstrap.Offcanvas

  // TODO: move this to .json file
  // TODO: make scrolling to fragment stop a little higher (because of navbar)
  // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
  items: SidebarItemModel[] = [
    {
      title: 'Página Inicial',
      icon: 'fas fa-home',
      route: '',
      collapsed: true,
    },
    {
      title: 'Semana de Recepção',
      icon: 'fas fa-calendar', // far fa-calendar, fas fa-calendar-week
      route: 'semana-de-recepcao',
      collapsed: true,
      subitems: [
        {
          title: 'Apadrinhamento',
          id: 'apadrinhamento',
        },
      ],
    },
    // {
    //   title: 'Kit Bixo',
    //   icon: 'fas fa-tshirt', // fas fa-gifts, fas fa-gift
    //   route: 'kit-bixo',
    //   collapsed: true,
    // },
    {
      title: 'Matrícula',
      icon: 'fas fa-passport',
      route: 'matricula',
      collapsed: true,
      subitems: [
        {
          title: 'Fluxograma',
          id: 'fluxograma',
        },
        {
          title: 'Datas das chamadas',
          id: 'datas',
        },
        {
          title: 'Matrícula',
          id: 'matricula',
        },
        {
          title: 'Local de matrícula',
          id: 'locais',
        },
      ],
    },
    {
      title: 'Sobre o curso',
      icon: 'fas fa-graduation-cap',
      route: 'curso',
      collapsed: true,
    },
    {
      title: 'Projeto Ampére',
      icon: 'fab fa-youtube', // fab fa-youtube-square, fas fa-pen, fas fa-book
      route: 'projeto-ampere',
      collapsed: true,
      subitems: [
        {
          title: 'Pré-Cálculo',
          id: 'pre-calculo',
        },
        {
          title: 'Geometria Analítica',
          id: 'geometria-analitica',
        },
        {
          title: 'Programação',
          id: 'programacao',
        },
        {
          title: 'Física I',
          id: 'fisica1',
        },
        {
          title: 'Cálculo I',
          id: 'calculo1',
        },
      ],
    },
    {
      title: 'Serviços Acadêmicos',
      icon: 'fas fa-user-graduate',
      route: 'servicos-academicos',
      collapsed: true,
      subitems: [
        {
          title: 'Portal de Serviços USP',
          id: 'portal-de-servicos',
        },
        {
          title: 'e-Disciplinas (Moodle)',
          id: 'moodle',
        },
        {
          title: 'Ferramentas Google',
          id: 'ferramentas-google',
        },
        {
          title: 'Eduroam (Wi-Fi)',
          id: 'eduroam',
        },
        {
          title: 'MatrUSP',
          id: 'matrusp',
        },
        {
          title: 'Outros mimos',
          id: 'mimos',
        },
      ],
    },
    {
      title: 'ICs e Extracurriculares',
      icon: 'fas fa-microscope', // fas fa-atom
      route: 'ics-extras',
      collapsed: true,
      subitems: [
        {
          title: 'Extracurriculares Técnicas',
          id: 'extras-tecnicas',
        },
        {
          title:
            'Centro Acadêmico, Secretarias Acadêmicas, Coletivos e Grupos Religiosos',
          id: 'centro-academico-etc',
        },
        {
          title: 'Iniciações Científicas',
          id: 'ics',
        },
        {
          title: 'Grupos Extracurriculares',
          id: 'extras',
        },
      ],
    },
    {
      title: 'Bandejão',
      icon: 'fas fa-utensils',
      route: 'bandejao',
      collapsed: true,
    },
    {
      title: 'Bibliotecas',
      icon: 'fas fa-book-reader',
      route: 'bibliotecas',
      collapsed: true,
    },
    {
      title: 'Moradias',
      icon: 'fas fa-house-user',
      route: 'moradias',
      collapsed: true,
      subitems: [
        {
          title: 'Alojamento Estudantil no Campus',
          id: 'alojamento',
        },
        {
          title: 'Grupos no Facebook',
          id: 'grupos-no-facebook',
        },
        {
          title: 'Imobiliárias de São Carlos',
          id: 'imobiliarias',
        },
      ],
    },
  ]

  private expanded?: SidebarItemModel

  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    // eslint-disable-next-line
    const sidebarElement = document.querySelector('#sidebar')

    if (sidebarElement) {
      this.sidebar = new bootstrap.Offcanvas(sidebarElement)

      // when the sidebar is hidden through Bootstrap scripts
      // (e.g.: by clicking in the backdrop or pressing <ESC>)
      // set the `isOpen` attribute to false
      sidebarElement.addEventListener('hidden.bs.offcanvas', () => {
        this.sidebarService.close()

        if (this.expanded) {
          this.expanded.collapsed = true
        }
      })
    }

    this.subscriptions.push(
      this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) {
          const regexp = /\/(?<route>\w*)(?<fragment>#.+)?/
          const groups = regexp.exec(e.urlAfterRedirects)?.groups ?? {}

          /* eslint-disable dot-notation */
          this.route = groups['route']
          this.fragment = groups['fragment']?.replace('#', '')
          /* eslint-enable dot-notation */

          this.sidebar.hide()
        }
      })
    )

    this.subscriptions.push(
      this.sidebarService.visibility$.subscribe(isOpen => {
        isOpen ? this.sidebar.show() : this.sidebar.hide()
      })
    )

    this.expanded = this.items.find(item => !item.collapsed)
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe()
    })
  }

  toggleCollapsed(item: SidebarItemModel): void {
    if (item.collapsed) {
      if (this.expanded) {
        this.expanded.collapsed = true
      }

      this.expanded = item
      item.collapsed = false
    } else {
      this.expanded = undefined
      item.collapsed = true
    }
  }
}
