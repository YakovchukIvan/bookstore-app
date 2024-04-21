import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayouts from '../layouts/MainLayouts';

import Home from '../pages/Home';
import BookStore from '../pages/MainBookStore/BookStore';
import SingleCourse from '../components/SingleCourse';
import About from '../components/About';
import Contacts from '../pages/Contacts';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            {/* <div className="container"> */}
            <Route index element={<Home />}></Route>
            <Route path="courses" element={<BookStore />}></Route>
            <Route path="courses/:slug" element={<SingleCourse />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contacts" element={<Contacts />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            {/* </div> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
