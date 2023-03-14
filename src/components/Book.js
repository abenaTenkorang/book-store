import React from 'react';
import PropTypes from 'prop-types';
import Books from './Books';

const Content = ({ books }) => (
  <ul className="content">
    {
books.map((book) => <Books key={book.id} book={book} />)
}
  </ul>

);
Content.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Content;
