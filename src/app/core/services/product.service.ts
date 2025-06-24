import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { forkJoin, map, catchError, of } from 'rxjs';
import {
  Product,
  ProductPrice,
  ProductImages,
  ProductDetail,
} from '../../interfaces/product.interface';
import { environment } from '../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly MAIN_PRODUCT_SKU = 'GOA535';

  private readonly rawProducts = signal<Product[]>([]);
  private readonly rawPrices = signal<ProductPrice[]>([]);
  private readonly isLoading = signal<boolean>(true);
  private readonly error = signal<string | null>(null);

  private readonly dataSource = toSignal(
    forkJoin({
      products: this.http.get<Product[]>(`${environment.dataPath}/products.json`),
      prices: this.http.get<ProductPrice[]>(`${environment.dataPath}/price.json`)
    }).pipe(
      map(({ products, prices }) => {
        this.rawProducts.set(products);
        this.rawPrices.set(prices);
        this.isLoading.set(false);
        this.error.set(null);
        return { products, prices };
      }),
      catchError(() => {
        this.error.set('Failed to load product data.');
        this.isLoading.set(false);
        return of({ products: [], prices: [] });
      })
    ),
    { initialValue: { products: [], prices: [] } }
  );

  private readonly productsWithPrices = computed(() => {
    const priceMap = new Map(
      this.rawPrices().filter(p => p.isActive).map(p => [p.sku, p])
    );
    return this.rawProducts().map(product => ({
      ...product,
      priceData: priceMap.get(product.sku),
      formattedPrice: priceMap.get(product.sku)?.priceFormatted || 'Price on request',
      numericPrice: priceMap.get(product.sku)?.price || 0
    }));
  });

  private readonly processedProducts = computed(() =>
    this.productsWithPrices().map(product => ({
      ...product,
      images: this.processProductImages(product),
      productDetails: {
        ...product.productDetails,
        data: this.mapProductDetailsWithImageSrc(product)
      },
      productSpecifications: {
        ...product.productSpecifications,
        data: this.mapProductSpecificationsWithImageSrc(product)
      }
    }))
  );

  private mapProductDetailsWithImageSrc(product: Product): ProductDetail[] {
    const medias = product.medias || [];
    return (product.productDetails?.data || []).map((detail: ProductDetail) => {
      const media = medias.find(m => m.targetAttr === detail.iconTarget);
      return {
        ...detail,
        imageSrc: media ? `${environment.logosPath}/${media.path}` : undefined
      };
    });
  }

  private mapProductSpecificationsWithImageSrc(product: Product): ProductDetail[] {
    const medias = product.medias || [];
    return (product.productSpecifications?.data || []).map((spec: ProductDetail) => {
      const media = medias.find(m => m.targetAttr === spec.iconTarget);
      return {
        ...spec,
        imageSrc: media ? `${environment.logosPath}/${media.path}` : undefined
      };
    });
  }

  readonly mainProduct = computed(() =>
    this.processedProducts().find(p => p.sku === this.MAIN_PRODUCT_SKU) || null
  );

  readonly relatedProducts = computed(() => {
    const mainProd = this.mainProduct();
    return mainProd?.relatedProducts
      .map(sku => this.processedProducts().find(p => p.sku === sku))
      .sort((a, b) => (b?.numericPrice || 0) - (a?.numericPrice || 0)) || [];
  });

  readonly loading = this.isLoading.asReadonly();
  readonly loadingError = this.error.asReadonly();

  constructor() {
    this.dataSource();
    effect(() => {
      if (this.mainProduct() && !this.loading()) {
        console.log('Main Product:', this.mainProduct() , this.mainProduct()?.title);
        console.log('Related Products:', this.relatedProducts());
      }
    });
  }

  private processProductImages(product: Product): ProductImages {
    const images: ProductImages = { gallery: [], details: {}, icons: {} };
    product.medias.forEach(media => {
      const fullPath = `${environment.imagesPath}/${media.path}`;
      if (media.targetAttr === 'mainImage') images.mainImage = fullPath;
      else if (media.targetAttr === 'detail-1') product.productDetails.mainImage = fullPath;
      else if (media.targetAttr === 'detail-2') product.productSpecifications.mainImage = fullPath;
      else if (media.targetAttr === 'gallery') images.gallery.push(fullPath);
      else if (media.targetAttr.startsWith('icon')) images.icons[media.targetAttr] = fullPath;
    });
    if (!images.gallery.length && images.mainImage) images.gallery.push(images.mainImage);
    return images;
  }
}
