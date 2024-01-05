// format-price.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

interface ConversionRates {
  [currencySymbol: string]: number;
}

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {
  transform(price: number | string, currencySymbol: string = '₹'): string {
    if (!price && price !== 0) return ''; // Handle undefined or null

    // Conversion rates
    const conversionRates: ConversionRates = {
      '₹': 0.014, // 1 INR = 0.014 USD (Example conversion rate)
      // Add more currencies and their conversion rates
    };

    if (typeof conversionRates[currencySymbol] === 'undefined') {
      console.error(`Unsupported currency symbol: ${currencySymbol}`);
      return ''; // Handle unsupported currency symbol
    }

    // If the input is a string with the currency symbol, extract the numeric part
    const numericPrice = typeof price === 'string' ? parseFloat(price.replace(currencySymbol, '')) : price;

    const convertedPrice = numericPrice * conversionRates[currencySymbol];
    const dollars = Math.floor(convertedPrice);
    const cents = (convertedPrice % 1) * 100;

    return `$${dollars}.${cents.toFixed(2)}`;
  }
}
