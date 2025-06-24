import {Component, Input} from '@angular/core';
import {ProductDetail} from '../../../interfaces/product.interface';
import {SpecItemComponent} from '../spec-item/spec-item.component';

@Component({
  selector: 'app-product-showcase',
  imports: [
    SpecItemComponent
  ],
  standalone: true,
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.css'
})
export class ProductShowcaseComponent {
  @Input() category!: string | undefined;
  @Input() title!: string | undefined;
  @Input() imageSrc!: string | undefined;
  @Input() imagePosition!: 'right' | 'left';
  @Input() showcaseData!: ProductDetail[] | undefined;

}
