import { Component } from '@angular/core';

@Component({
  selector: 'app-infobar',
  imports: [],
  standalone:true,
  templateUrl: './infobar.component.html',
  styleUrl: './infobar.component.css'
})
export class InfobarComponent {

  public infobarLeftIcons = [
    { src: 'assets/images/icons/Contact.png', alt: 'Contact us' },
    { src: 'assets/images/icons/Stores.png', alt: 'Find locations' },
    { src: 'assets/images/icons/Language.png', alt: 'Information' }
  ];

  public infobarRightIcons = [
    { src: 'assets/images/icons/bag.png', alt: 'Bag' },
    { src: 'assets/images/icons/wishlist.png', alt: 'Wishlist' },
    { src: 'assets/images/icons/Login.png', alt: 'Login' },
    { src: 'assets/images/icons/Search.png', alt: 'Search' }
  ];

}
