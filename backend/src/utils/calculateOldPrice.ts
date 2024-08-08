export function calculateOldPrice(price: number, discount: number): string {
  const oldPrice = price / (100 - discount);
  const priceWithCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(oldPrice);

  return priceWithCurrency;
}
