import React from "react";

import { CategoryLabel } from "../CategoryLabel";
import { commonCategory } from "./style.module.css";
const DEFAULT_LABEL = "전체";

export const Categories = ({ categories, selectedLabel, onSelect }) => {
  return (
    <div className={commonCategory}>
      {
        <CategoryLabel
          categoryLabel={DEFAULT_LABEL}
          onSelect={onSelect}
          active={selectedLabel === DEFAULT_LABEL}
        />
      }
      {categories.map((category) => {
        return (
          <CategoryLabel
            categoryLabel={category.fieldValue}
            onSelect={onSelect}
            active={selectedLabel === category.fieldValue}
          />
        );
      })}
    </div>
  );
};
