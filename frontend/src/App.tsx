import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
