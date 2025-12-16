import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import MainLayouts from '@/layouts/MainLayouts';
import Home from '@/pages/Home';
import BookStore from '@/pages/MainBookStore/BookStore';
import About from '@/pages/About';
import Contacts from '@/pages/Contacts';
import NotFound from '@/pages/NotFound';
import SingleBook from '@/pages/SingleBook';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route index element={<Home />}></Route>
            <Route path="books" element={<BookStore />}></Route>
            <Route path="books/:id" element={<SingleBook />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
