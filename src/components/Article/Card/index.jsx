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
    <Link to={`/post/${blog.frontmatter.slug}`}>
      <div className={articleCard} key={blog.id}>
        <div className={textWrapper}>{blog.frontmatter.title}</div>

        <div className={div}>{blog.excerpt}</div>
        <div className={buttonsLink}>
          <div className={textWrapper2}>{blog.frontmatter.date}</div>
        </div>
      </div>
    </Link>
  );
};
