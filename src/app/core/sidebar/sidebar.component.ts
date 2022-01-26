import { Component, Input } from '@angular/core'
import { SidebarModel } from '@models'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  @Input() sidebarItems!: SidebarModel
  @Input() isCollapsed!: boolean

  constructor() {
    this.isCollapsed = !this.isCollapsed
  }

}
