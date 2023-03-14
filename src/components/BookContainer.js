import React from 'react';
import BookContent from './Book';
import AddBook from './AddBook';

const BookContainer = () => {
  const books = [
    {
      title: 'The watchtower',
      author: 'abi',
      id: 1,
      category: 'Novel',
    },
    {
      title: 'Awake',
      author: 'mimi',
      id: 2,
      category: 'Novel',
    },
  ];

  return (
    <div className="main-container">
      <BookContent books={books} />
      <AddBook />
    </div>
  );
};
export default BookContainer;
