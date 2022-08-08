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
    filterData: { store: { id: 0, name: '' } }
  });
  const handleSubmitFilter = (data: StoreFilterData) => {
    if (data.store === null) {
      data = { store: { id: 0, name: '' } };
    }
    setControlComponentsData({ filterData: data });
  };
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <SelectComponent onSubmitFilter={handleSubmitFilter} />
        <SalesSummary filterData={controlComponentsData.filterData} />
      </div>
    </div>
  );
}

export default App;
