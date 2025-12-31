import logo from './logo.svg';
import './App.css';

import Navigation from './customer/components/navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
