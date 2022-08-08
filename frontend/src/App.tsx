import Header from './components/Header';

import './App.css';
import SelectComponent from './components/SelectComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <SelectComponent />
        <h2>Total sales and chart</h2>
      </div>
    </div>
  );
}

export default App;
