import React from 'react';

const Card = ({ question, children }) => {
  return (
    <div className='q-card'>
      <h2 style={{ height: '60px' }}>{question.que}</h2>
      {children}
    </div>
  );
};

export default Card;
