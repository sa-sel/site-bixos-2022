import { Component } from '@angular/core'
import { SocialMedia, SocialMediaModel } from '@models'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialMedia: SocialMediaModel[] = [
    { name: SocialMedia.Facebook, url: 'https://www.facebook.com/sasel.usp' },
    { name: SocialMedia.Instagram, url: 'https://www.instagram.com/saselusp/' },
    { name: SocialMedia.WhatsApp, url: '+55 (71) 8155-6248' },
    { name: SocialMedia.Email, url: 'sasel@eesc.usp.br' },
    {
      name: SocialMedia.YouTube,
      url: 'https://www.youtube.com/channel/UCCIw2l3rNCepuZsugA4BC7w',
    },
    { name: SocialMedia.GitHub, url: 'https://github.com/sa-sel' },
  ]
}
