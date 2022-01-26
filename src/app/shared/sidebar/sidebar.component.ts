import { Component, Input } from '@angular/core'
import { SidebarModel } from 'models/sidebar-item.model'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor() { }

  @Input() { }

}
