import { Component, OnDestroy, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { ImageModel } from '@models'
import { Subscription } from 'rxjs'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
})
export class BannerRouterComponent implements OnInit, OnDestroy {
  subscription!: Subscription
  currentImages: ImageModel[] = []
  currentLogo: ImageModel = {alt: "", src: ""}

  image1: ImageModel = {
    src: '../../../assets/images/banner.jpg',
    alt: 'uma foto da comissao',
  }

  image2: ImageModel = {
    src: 'https://pixy.org/src2/600/6007103.jpg',
    alt: 'imagem teste',
  }

  image3: ImageModel = {
    src: 'https://freepikpsd.com/file/2019/10/generic-company-logo-png-7-Transparent-Images.png',
    alt: 'uma logo qualquer',
  }

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.subscription = this.route.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url === '/a') {
          this.currentImages=[]
          this.currentLogo=this.image3
          this.currentImages.push(this.image1)
        }
        if (event.url === '/') {
          this.currentImages=[]
          this.currentLogo=this.image3
          this.currentImages.push(this.image2)
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
