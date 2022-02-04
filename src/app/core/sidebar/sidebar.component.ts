import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core'
import { SidebarItemModel } from '@models'
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnChanges {
  // two-way data binding
  @Input() isOpen!: boolean
  @Output() isOpenChange = new EventEmitter<boolean>()

  sidebar!: bootstrap.Offcanvas
  items: SidebarItemModel[] = [
    {
      title: 'Página Inicial',
      link: {
        url: '',
      },
    },
  ]

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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.sidebar) {
      // eslint-disable-next-line
      changes['isOpen'].currentValue ? this.sidebar.show() : this.sidebar.hide()
    }
  }
}
