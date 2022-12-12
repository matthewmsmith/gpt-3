import React from "react";
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from '../blog/imports'
import "./blog.css";

const articleData = [
  {
   imgUrl: blog02, 
    date: 'Nov 23, 2010',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog03, 
    date: 'Nov 3, 2013',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog04, 
    date: 'Jan 23, 2019',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is?'
  },
  {
    imgUrl: blog05, 
    date: 'July 23, 2022',
    title: 'GPT-3 and Open AI is the future. Let us explore how it is'
  
  },
]

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, we are blogging about.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date='Dec 26, 2022' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          {articleData.map((item, index) => (
            <Article title={item.title} date={item.date} imgUrl={item.imgUrl} key={item.date + index} />
          ))}
        </div>
      </div> 
    </div>
  );
};

export default Blog;
