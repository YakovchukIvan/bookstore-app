import { useEffect } from 'react';
import courses from '../data/courses';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import NotFound from './NotFound';

function SingleCourse() {
  const params = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => {
    return course.slug === params.slug;
  });

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  // Simply show NotFOund component
  //   if (!course) {
  //     return <NotFound />;
  //   }

  return (
    <>
      <h1>Title: {course.title}</h1>
      <h2>Caption: {course?.caption}</h2>
      <h3>Type: {course?.slug}</h3>
      <h4>ID: {course?.id}</h4>
      <br />
      <hr />
      <Link to=".." relative="path">
        All courses
      </Link>
    </>
  );
}

export default SingleCourse;
