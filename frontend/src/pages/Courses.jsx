import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useEffect, useState } from 'react';

import books from '../data/courses';
import ListSort from '../components/ListSort';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(books, key) {
  console.log(books, key);
  const sortedCourses = [...books];
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses;
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  console.log(sortedCourses);
  return sortedCourses;
}

function Courses() {
  const location = useLocation();
  // Приймає location та шлях який там пишеться, напириклад http://localhost:3000/courses?sort=id . Все що після ? знака питання, це вже зчитує хук useLocation, а з допомогою бібліотеки query-string ми розпарсуємо ці значення та отримуємо ключ.
  // http://localhost:3000/courses?sort=id - В нашому випадку ключ це буде id
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(books, sortKey)
  );

  const navigate = useNavigate();

  useEffect(() => {
    console.log('UseEffect');
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...books]);
    } else {
      setSortedCourses(sortCourses(books, sortKey));
    }
  }, [sortKey, navigate]);

  function onClickList(keyItem) {
    setSortKey(keyItem);
    navigate(`.?sort=${keyItem}`);
  }

  return (
    <div>
      <ListSort onClickList={onClickList} />
      <div>
        {sortKey ? (
          <h1>
            Courses sorted by :
            <span className="courses__subtitle"> {sortKey}</span>
          </h1>
        ) : (
          <h1>Courses </h1>
        )}
      </div>
      {sortedCourses.map((course) => (
        <div className="block__list-course" key={course.id}>
          <Link to={course.slug} className="courseLink">
            <img src={course.imgSrc} alt="img" />
            <div>
              <p>
                <span>Назва:</span> <span>{course.title}</span>
              </p>
              <p>
                <span>Автор:</span> {course.author}
              </p>
              <p>
                <span>Опис:</span> {course.captspanon}
              </p>
              <p>
                <span>Рік видання:</span> {course.year}
              </p>
              <p>
                <span>Жанр:</span> {course.genre}
              </p>
              <p>
                <span>Позначка:</span> {`${course.isFavorite}`}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Courses;
