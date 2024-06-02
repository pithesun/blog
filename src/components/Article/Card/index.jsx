import React from "react";
import {
  articleCard,
  textWrapper,
  buttonsLink,
  textWrapper2,
  div,
} from "./style.module.css";
import { Link } from "gatsby";

export const ArticleCard = ({ blog }) => {
  return (
    <div className={articleCard} key={blog.id}>
      <Link to={`/blog/${blog.frontmatter.slug}`}>
        <div className={textWrapper}>{blog.frontmatter.title}</div>
      </Link>
      <div className={div}>{blog.excerpt}</div>
      <div className={buttonsLink}>
        <div className={textWrapper2}>{blog.frontmatter.date}</div>
      </div>
    </div>
  );
};
