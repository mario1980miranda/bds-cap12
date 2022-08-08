import { SalesByGender } from '../../types/SalesByGender';
import { formatGender } from '../../util/formatters';

export const buildSalesByStoreChart = (sales: SalesByGender[]) => {
  const labels = sales.map((sale) => formatGender(sale.gender));
  const series = sales.map((sale) => sale.sum);
  return {
    labels,
    series
  };
};
