import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { SidebarModel } from '@models'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnChanges {
  @ViewChild('sidebar') sidebar!: TemplateRef<any>

  @Input() sidebarItems!: SidebarModel
  @Input() public isSidebarCollapsed = true

  toggleCollapse() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed
  }

  // for two-way data binding
  @Output() isCollapsedChange = new EventEmitter<boolean>()

  ngOnChanges(changes: SimpleChanges): void {
  // eslint-disable-next-line
    if (changes['isCollapsed'].currentValue) {
      this.isSidebarCollapsed = false
      this.isCollapsedChange.emit(this.isSidebarCollapsed)
    }
  }

}
