import React from 'react';
import './article.css';

const Article = ({ img, title, date, className }) => {
  return (
    <div className={`gpt3__article ${className}`}>
      <div className='gpt3__article-image'>
        <img src={img} alt={title} />
      </div>
      <div className='gpt3__article-content'>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>
          <a href='#read'>Read Full Article</a>
        </p>
      </div>
    </div>
  );
};

export default Article;
