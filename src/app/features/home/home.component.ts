import {Component, inject} from '@angular/core';
import {ProductHeroComponent} from './product-hero/product-hero.component';
import {ProductService} from '../../core/services/product.service';

@Component({
  selector: 'app-home',
  imports: [ProductHeroComponent],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private readonly productService = inject(ProductService);


  readonly product = this.productService.mainProduct;
  readonly loading = this.productService.loading;
  readonly error = this.productService.loadingError;

}
