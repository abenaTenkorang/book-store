import React from 'react';
import Content from './Book';
import AddBook from './AddBook';

const Container = () => {
  const books = [
    {
      title: 'The boy',
      author: 'abi',
      id: 1,
      category: 'Novel',
    },
    {
      title: 'Dear John',
      author: 'mimi',
      id: 2,
      category: 'Novel',
    },
  ];

  return (
    <div className="main-container">
      <Content books={books} />
      <AddBook />
    </div>
  );
};
export default Container;
