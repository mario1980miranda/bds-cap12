import DonutChart from '../DonutChart';
import './styles.css';

function SalesSummary() {
  return (
    <div className="sales-summary-card base-card">
      <div className="sales-summary-top">
        <h1>R$ 746.484,00</h1>
        <span>Total de vendas</span>
      </div>
      <div className="sales-summary-bottom">
        <DonutChart
          name="Lojas"
          labels={['Primeiro', 'Segundo', 'Terceiro']}
          series={[50, 25, 25]}
        />
      </div>
    </div>
  );
}

export default SalesSummary;
