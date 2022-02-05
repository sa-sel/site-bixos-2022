import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
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
  items: SidebarItemModel[] = [
    {
      title: 'Página Inicial',
      icon: 'fas fa-home',
      link: {
        url: '',
      },
    },
    {
      title: 'Semana de Recepção',
      icon: 'fas fa-calendar', // far fa-calendar, fas fa-calendar-week
      link: {
        url: 'recepcao',
      },
    },
    {
      title: 'Kit Bixo',
      icon: 'fas fa-tshirt', // fas fa-gifts, fas fa-gift
      link: {
        url: 'kit-bixo',
      },
    },
    {
      title: 'Matrícula',
      icon: 'fas fa-passport',
      link: {
        url: 'matricula',
      },
    },
    {
      title: 'Sobre o curso',
      icon: 'fas fa-graduation-cap',
      link: {
        url: 'curso',
      },
    },
    {
      title: 'Projeto Ampére',
      icon: 'fab fa-youtube', // fab fa-youtube-square, fas fa-pen, fas fa-book
      link: {
        url: 'projeto-ampere',
      },
    },
    {
      title: 'Serviços Acadêmicos',
      icon: 'fas fa-user-graduate',
      link: {
        url: 'servicos-academicos',
      },
    },
    {
      title: 'ICs e Extracurriculares',
      icon: 'fas fa-microscope', // fas fa-atom
      link: {
        url: 'ic-extras',
      },
    },
    {
      title: 'Bandejão',
      icon: 'fas fa-utensils',
      link: {
        url: 'bandejao',
      },
    },
    {
      title: 'Bibliotecas',
      icon: 'fas fa-book-reader',
      link: {
        url: 'bibliotecas',
      },
    },
    {
      title: 'Moradias',
      icon: 'fas fa-house-user',
      link: {
        url: 'moradias',
      },
    },
  ]

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
      })
    }

    this.subscription = this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.route = e.urlAfterRedirects.replace('/', '')
        this.sidebar.hide()
      }
    })
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
}
