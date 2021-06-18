const formatCurrency = (amount: number): string =>
  amount.toLocaleString('vi', {
    style: 'currency',
    currency: 'VND',
  });

export {formatCurrency};
