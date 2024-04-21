import { useEffect } from 'react';
import books from '../data/courses';
import { Link, useNavigate, useParams } from 'react-router-dom';

function SingleCourse() {
  const params = useParams();
  const navigate = useNavigate();

  console.log('courses:', books);
  const book = books.find((books) => {
    return books.slug === params.slug;
  });

  useEffect(() => {
    if (!book) {
      navigate('..', { relative: 'path' });
    }
  }, [book, navigate]);

  // Simply show NotFOund component
  //   if (!course) {
  //     return <NotFound />;
  //   }

  return (
    <>
      <h1>Title: {book.title}</h1>
      <h2>Caption: {book?.caption}</h2>
      <h3>Type: {book?.slug}</h3>
      <h4>ID: {book?.idBook}</h4>
      <br />
      <hr />
      {/* <Link to=".." relative="path">
        All books
      </Link> */}
    </>
  );
}

export default SingleCourse;
