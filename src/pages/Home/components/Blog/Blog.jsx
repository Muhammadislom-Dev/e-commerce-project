import React from "react";
import "./Blog.css";
import { blogData } from "./blogs";

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h2 className="blog-name">TEKIN MARKET BLOG</h2>
        <div className="blog-list">
          {blogData.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <img src={blog.img} alt="" className="blog-img" />
              <h5 className="blog-names">{blog.title}</h5>
              <p className="blog-text">{blog.text}</p>
              <p className="blog-time">{blog.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
