import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageModel } from '@models';

@Component({
  selector: 'app-banner-router',
  templateUrl: './banner-router.component.html',
  styleUrls: ['./banner-router.component.scss']
})
export class BannerRouterComponent implements OnInit,OnDestroy {

  sub:any

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

  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub=this.activatedRoute.url.subscribe(parameter => {
      console.log(parameter)
    })
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe()
  }

}
