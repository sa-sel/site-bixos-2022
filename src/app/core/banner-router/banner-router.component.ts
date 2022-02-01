import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ImageModel } from '@models';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
  styleUrls: ['./banner-router.component.scss']
})
export class BannerRouterComponent implements OnInit,OnDestroy {

  sub !: Subscription

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

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.sub=this.route.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event:any) => {
     console.log(event.url);
   });
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe()
  }

}
