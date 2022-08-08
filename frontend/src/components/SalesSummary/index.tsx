import { useEffect, useState } from 'react';
import { SalesSummaryData } from '../../types/SalesSummaryData';
import { formatPrice } from '../../util/formatters';
import { requestBackend } from '../../util/requests';
import { StoreFilterData } from '../SelectComponent';
import { PieChartConfig } from '../../types/PieChartConfig';
import { SalesByGender } from '../../types/SalesByGender';
import { buildSalesByStoreChart } from './helpers';
import DonutChart from '../DonutChart';

import './styles.css';

type Props = {
  filterData: StoreFilterData;
};

const initialSummary = {
  sum: 0
};

function SalesSummary({ filterData }: Props) {
  const [salesByGender, setSalesByGender] = useState<PieChartConfig>();
  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  useEffect(() => {
    requestBackend
      .get<SalesSummaryData>(`/sales/summary?storeId=${filterData.store?.id}`)
      .then((response) => {
        console.log('/sales/summary', response.data);
        setSummary(response.data);
      })
      .catch(() => {
        console.log('Error to fetch sales-by=date');
      });
  }, [filterData]);
  useEffect(() => {
    requestBackend
      .get<SalesByGender[]>(`/sales/by-gender?storeId=${filterData.store?.id}`)
      .then((response) => {
        const newSalesByStore = buildSalesByStoreChart(response.data);
        setSalesByGender(newSalesByStore);
      })
      .catch(() => {
        console.log('Fail to fetch /sales/by-store');
      });
  }, [filterData]);
  return (
    <div className="sales-summary-card base-card">
      <div className="sales-summary-top">
        <h1>{formatPrice(summary.sum)}</h1>
        <span>Total de vendas</span>
      </div>
      <div className="sales-summary-bottom">
        <DonutChart name="Lojas" labels={salesByGender?.labels} series={salesByGender?.series} />
      </div>
    </div>
  );
}

export default SalesSummary;
