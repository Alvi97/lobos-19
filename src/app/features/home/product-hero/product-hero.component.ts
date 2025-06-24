import {Component, inject, Input, Signal} from '@angular/core';
import {ProductService} from '../../../core/services/product.service';
import {CurrencyFormaterPipe} from '../../../shared/utils/pipes/currency-formater.pipe';
import {ProcessedProduct} from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-hero',
  imports: [
    CurrencyFormaterPipe
  ],
  standalone: true,
  templateUrl: './product-hero.component.html',
  styleUrl: './product-hero.component.css'
})
export class ProductHeroComponent {
  private readonly productService = inject(ProductService);


  public mainImage = this.productService.mainProduct()?.images.mainImage;
  @Input() product!: Signal<ProcessedProduct | null>;
  @Input() loading!: Signal<boolean>;
  @Input() error!: Signal<string | null>;


  public selectMainImage(img: string) {
  this.mainImage = img;
  }

  public selectedImageIndex() {

  }

  public addToCart() {

  }
}
