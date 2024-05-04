import { useSelector } from 'react-redux';

import { selectBooks } from '../redux/slices/bookSlices';
import SwiperGalery from '../components/Swiper';

function Contacts() {
  const booksData = useSelector(selectBooks);

  return (
    <div className="contact">
      <h2>Contact</h2>
    </div>
  );
}

export default Contacts;
