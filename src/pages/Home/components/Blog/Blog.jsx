import React from "react";
import "./Blog.css";
import { blogData } from "./blogs";
import { getBlogData } from "../../../../api";
import { useQuery } from "react-query";
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

function Blog() {
  const { data, isLoading } = useQuery("blogData", getBlogData);

  // function formatSecondsToDateString(seconds) {
  //   const date = new Date(seconds * 1000);
  //   const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  //   return date.toLocaleDateString("en-US", options);
  // }

  // const seconds = data?.user?.lastOnline / 1000;
  // const formattedDate = formatSecondsToDateString(seconds);

  if (isLoading) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={"80vh"}>
        <CircularProgress
          color="success"
          style={{ width: "100px", height: "100px" }}
        />
      </Box>
    );
  }
  return (
    <div className="blog">
      <div className="container">
        <h2 className="blog-name">TEKIN MARKET BLOG</h2>
        <div className="blog-list">
          {data?.objectKoinot?.content?.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <Link to={`/blog/about/${blog.id}`}>
                <div className="blog-img-box">
                <img src={blog.photo?.filePath} alt="" className="blog-img" />
                </div>
                <h5 className="blog-names">{blog.name}</h5>
                <p className="blog-text">{blog.description}</p>
                <p className="blog-time">{blog.time}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
