import {
  Component,
  ElementRef,
  inject,
  ViewChild,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import {CurrencyFormaterPipe} from '../../utils/pipes/currency-formater.pipe';

@Component({
  selector: 'app-watch-slider',
  imports: [CommonModule, CurrencyFormaterPipe],
  standalone: true,
  templateUrl: './watch-slider.component.html',
  styleUrl: './watch-slider.component.css'
})
export class WatchSliderComponent {
  @ViewChild('sliderItems') sliderItems!: ElementRef<HTMLUListElement>;
  public readonly productService = inject(ProductService);

  private isDown = false;
  private startX: number = 0;
  private scrollLeft: number = 0;

  onPointerDown(event: MouseEvent | TouchEvent): void {
    this.isDown = true;
    const slider = this.sliderItems.nativeElement;
    slider.classList.add('active');

    const clientX = this.getClientX(event);
    this.startX = clientX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;

    event.preventDefault();
  }

  onPointerMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDown) return;

    event.preventDefault();

    const slider = this.sliderItems.nativeElement;
    const clientX = this.getClientX(event);
    const x = clientX - slider.offsetLeft;
    const dist = (x - this.startX) * 2; // Multiply by 2 for faster scrolling
    slider.scrollLeft = this.scrollLeft - dist;
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:touchend', ['$event'])
  @HostListener('document:mouseleave', ['$event'])
  onPointerUpOrLeave(event: MouseEvent | TouchEvent): void {
    if (!this.isDown) return;
    this.isDown = false;
    this.sliderItems.nativeElement.classList.remove('active');
  }

  private getClientX(event: MouseEvent | TouchEvent): number {
    return event.type.startsWith('touch')
      ? (event as TouchEvent).touches[0].clientX
      : (event as MouseEvent).clientX;
  }

}
