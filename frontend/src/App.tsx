import Header from './components/Header';
import SelectComponent, { StoreFilterData } from './components/SelectComponent';
import SalesSummary from './components/SalesSummary';
import { useState } from 'react';

import './App.css';

type ControlComponentsData = {
  filterData: StoreFilterData;
};

function App() {
  const [controlComponentsData, setControlComponentsData] = useState<ControlComponentsData>({
    filterData: { store: null }
  });
  const handleSubmitFilter = (data: StoreFilterData) => {
    console.log('Filtro ', data);
    setControlComponentsData({ filterData: data });
  };
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <SelectComponent onSubmitFilter={handleSubmitFilter} />
        <SalesSummary />
      </div>
    </div>
  );
}

export default App;
