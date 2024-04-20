import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayouts from '../layouts/MainLayouts';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
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
            <Route index element={<Home />}></Route>
            <Route path="courses" element={<Courses />}></Route>
            <Route path="courses/:slug" element={<SingleCourse />}></Route>
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
