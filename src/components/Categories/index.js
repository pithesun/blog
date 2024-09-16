import React from "react";

import { CategoryLabel } from "../CategoryLabel";
import { commonCategory } from "./style.module.css";
import { DEFAULT_LABEL } from "../../constants";
import { filterCategories } from "../../utils";

export const Categories = ({ categories, selectedLabel, onSelect }) => {
  const refinedCategories = React.useMemo(() => {
    return filterCategories(categories);
  }, [categories]);

  return (
    <div className={commonCategory}>
      {
        <CategoryLabel
          categoryLabel={DEFAULT_LABEL}
          onSelect={onSelect}
          active={selectedLabel === DEFAULT_LABEL}
        />
      }
      {refinedCategories.map((category) => {
        return (
          <CategoryLabel
            categoryLabel={category}
            onSelect={onSelect}
            active={selectedLabel === category}
          />
        );
      })}
    </div>
  );
};
