import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3__blog section_padding'>
      <h1 className='gradient_text'>A lot is happening, We are blogging about it.</h1>
      <div className='gpt3_blog-container'>
        <Article
          className='item1'
          img={blog01}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          date='Sep 26, 2021'
        />
        <Article
          img={blog02}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          date='Sep 26, 2021'
        />
        <Article
          img={blog03}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          date='Sep 26, 2021'
        />
        <Article
          img={blog04}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          date='Sep 26, 2021'
        />
        <Article
          img={blog05}
          title='GPT-3 and Open  AI is the future. Let us exlore how it is?'
          date='Sep 26, 2021'
        />
      </div>
    </div>
  );
};

export default Blog;
