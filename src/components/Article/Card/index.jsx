import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  articleCard,
  thumbnail,
  thumbnailPlaceholder,
  body,
  meta,
  tagBadge,
  metaDate,
  cardTitle,
  cardExcerpt,
} from "./style.module.css";

export const ArticleCard = ({ blog }) => {
  const image = blog.frontmatter.hero_image
    ? getImage(blog.frontmatter.hero_image)
    : null;

  const firstTag = blog.frontmatter.tags?.[0];

  return (
    <Link to={`/post/${blog.frontmatter.slug}`}>
      <div className={articleCard}>
        {image ? (
          <GatsbyImage
            image={image}
            alt={blog.frontmatter.hero_image_alt ?? ""}
            className={thumbnail}
            objectFit="cover"
          />
        ) : (
          <div className={thumbnailPlaceholder} />
        )}
        <div className={body}>
          <div className={meta}>
            {firstTag && <span className={tagBadge}>{firstTag}</span>}
            <span className={metaDate}>{blog.frontmatter.date}</span>
          </div>
          <h2 className={cardTitle}>{blog.frontmatter.title}</h2>
          <p className={cardExcerpt}>{blog.excerpt}</p>
        </div>
      </div>
    </Link>
  );
};
