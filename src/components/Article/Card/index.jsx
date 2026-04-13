import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  articleCard,
  thumbnail,
  body,
  meta,
  tagBadge,
  metaDate,
  cardTitle,
} from "./style.module.css";

export const ArticleCard = ({ blog }) => {
  const image = blog.frontmatter.hero_image
    ? getImage(blog.frontmatter.hero_image)
    : null;

  return (
    <Link to={`/post/${blog.frontmatter.slug}`}>
      <div className={articleCard}>
        <div className={body}>
          <div className={meta}>
            <span className={metaDate}>{blog.frontmatter.date}</span>
          </div>
          <h2 className={cardTitle}>{blog.frontmatter.title}</h2>
        </div>
        {image && (
          <GatsbyImage
            image={image}
            alt={blog.frontmatter.hero_image_alt ?? ""}
            className={thumbnail}
            objectFit="cover"
          />
        )}
      </div>
    </Link>
  );
};
