import {Component, inject} from '@angular/core';
import {ProductHeroComponent} from './product-hero/product-hero.component';
import {ProductService} from '../../core/services/product.service';
import {ProductShowcaseComponent} from '../../shared/components/product-showcase/product-showcase.component';
import {WatchSliderComponent} from '../../shared/components/watch-slider/watch-slider.component';

@Component({
  selector: 'app-home',
  imports: [ProductHeroComponent, ProductShowcaseComponent, WatchSliderComponent],
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
