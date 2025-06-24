import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormater',
  standalone: true
})
export class CurrencyFormaterPipe implements PipeTransform {

  transform(value: string | undefined): string | undefined {
    debugger;
    if (!value) return '';

    const match = value.match(/^([\d'.,\s]+)\s*([A-Z]{3})$/);
    if (!match) return value;

    const [, amount, currency] = match;
    return `${currency} ${amount}`;
  }

}
