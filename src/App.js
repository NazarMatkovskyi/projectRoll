import { Route, Routes } from 'react-router-dom';
import Analytics from './components/Analytics';
import Employment from './components/Employment';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Pay from './components/Pay';
import './components/styles/navbar.css';
import Circle from './components/table/Circle';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_inner">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/circle" element={<Circle />} />
          <Route path="/Employment" element={<Employment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
