import React from "react";
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from '../blog/imports'
import "./blog.css";


const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient-text">
          A lot is happening, we are blogging about.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={blog01} date='Dec 26, 2022' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date='Nov 23, 2017' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
          <Article imgUrl={blog03} date='July 15, 2022' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
          <Article imgUrl={blog04} date='Aug 01, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
          <Article imgUrl={blog05} date='Feb 14, 2021' title='GPT-3 and Open AI is the future. Let us explore how it is?'/>
        </div>
      </div> title='GPT-3 and Open AI is the future. Let us explore how it is?'
    </div>
  );
};

export default Blog;
