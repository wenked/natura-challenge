export function formatPrice(price: number): string {
  const realPrice = price / 100;

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(realPrice);

  return formattedPrice;
}
