import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { SidebarItemModel } from '@models'
import * as bootstrap from 'bootstrap'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges, OnDestroy {
  // two-way data binding
  @Input() isOpen!: boolean
  @Output() isOpenChange = new EventEmitter<boolean>()

  route = ''
  subscription!: Subscription
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
      route: 'recepcao',
      collapsed: true,
    },
    {
      title: 'Kit Bixo',
      icon: 'fas fa-tshirt', // fas fa-gifts, fas fa-gift
      route: 'kit-bixo',
      collapsed: true,
    },
    {
      title: 'Matrícula',
      icon: 'fas fa-passport',
      route: 'matricula',
      collapsed: true,
      subitems: [
        {
          title: 'Fluxograma',
          id: 'flowchart',
        },
        {
          title: 'Datas das chamadas',
          id: 'dates',
        },
        {
          title: 'Matrícula',
          id: 'enrollment',
        },
        {
          title: 'Local de matrícula',
          id: 'places',
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
    },
    {
      title: 'Serviços Acadêmicos',
      icon: 'fas fa-user-graduate',
      route: 'servicos-academicos',
      collapsed: true,
    },
    {
      title: 'ICs e Extracurriculares',
      icon: 'fas fa-microscope', // fas fa-atom
      route: 'ic-extras',
      collapsed: true,
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
    },
  ]

  private expanded?: SidebarItemModel

  constructor(private router: Router) {}

  ngOnInit(): void {
    // eslint-disable-next-line
    const sidebarElement = document.querySelector('#sidebar')

    if (sidebarElement) {
      this.sidebar = new bootstrap.Offcanvas(sidebarElement)

      // when the sidebar is hidden through Bootstrap scripts
      // (e.g.: by clicking in the backdrop or pressing <ESC>)
      // set the `isOpen` attribute to false
      sidebarElement.addEventListener('hidden.bs.offcanvas', () => {
        this.isOpen = false
        this.isOpenChange.emit(this.isOpen)

        if (this.expanded) {
          this.expanded.collapsed = true
        }
      })
    }

    this.subscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.route = e.urlAfterRedirects.replace('/', '')
        this.sidebar.hide()
      }
    })

    this.expanded = this.items.find(item => !item.collapsed)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidebar) {
      // eslint-disable-next-line
      changes['isOpen'].currentValue ? this.sidebar.show() : this.sidebar.hide()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
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
