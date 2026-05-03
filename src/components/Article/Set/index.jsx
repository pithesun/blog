import { ArticleCard } from "../Card";
import { articleSet } from "./style.module.css";

export const ArticleSet = ({ blogs }) => {
  return (
    <div className={articleSet}>
      {blogs.map((blog) => (
        <ArticleCard key={blog.frontmatter.title} blog={blog} />
      ))}
    </div>
  );
};
