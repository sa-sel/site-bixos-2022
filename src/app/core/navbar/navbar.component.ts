import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  @Input() isBelowBanner = true

  @ViewChild('navbar') navbarRef!: ElementRef

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.isBelowBanner) {
      /* eslint-disable no-undef */
      window.addEventListener('scroll', () => {
        // if a whole page was scrolled
        window.scrollY > window.innerHeight ? this.setSticky() : this.unsetSticky()
      })
      /* eslint-enable no-undef */
    } else {
      this.setSticky()
    }
  }

  ngOnDestroy(): void {
    this.unsetSticky()
  }

  // TODO
  openSidebar(): void {
    console.log('open sidebar')
  }

  goToHomepage(): void {
    this.router.navigate(['/'])
  }

  private setSticky() {
    const navbar = this.navbarRef?.nativeElement
    navbar.classList.add('fixed-top')

    // eslint-disable-next-line
    const main = document.querySelector('main') || document.querySelector('.main')
    if (main) {
      main.style.paddingTop = `${navbar.offsetHeight + 20}px`
    }
  }

  private unsetSticky() {
    const navbar = this.navbarRef?.nativeElement
    navbar.classList.remove('fixed-top')

    // eslint-disable-next-line
    const main = document.querySelector('main') || document.querySelector('.main')
    if (main) {
      main.style.paddingTop = '0'
    }
  }
}
