import Header from './components/Header';
import SelectComponent from './components/SelectComponent';
import SalesSummary from './components/SalesSummary';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <SelectComponent />
        <SalesSummary />
      </div>
    </div>
  );
}

export default App;
