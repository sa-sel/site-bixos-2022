import { Component, Input, OnInit } from '@angular/core'
import { SocialMedia, SocialMediaModel } from '@models'

@Component({
  selector: 'app-groups-panel',
  templateUrl: './groups-panel.component.html',
})
export class GroupsPanelComponent implements OnInit {
  @Input() size = 23
  @Input() color = ''

  ngOnInit(): void {
    this.color = this.color ? `text-${this.color}` : ''
  }

  groups: SocialMediaModel[] = [
    { name: SocialMedia.Facebook, url: 'https://www.facebook.com/sasel.usp' },
    { name: SocialMedia.WhatsApp, url: '+55 (71) 8155-6248' },
    { name: SocialMedia.Discord, url: 'https://github.com/sa-sel' },
  ]
}
