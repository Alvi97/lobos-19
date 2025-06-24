import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobile = window.innerWidth <= 800;

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 800;
  }

}
