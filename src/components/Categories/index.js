import React from "react";

import { CategoryLabel } from "../CategoryLabel";
import { commonCategory } from "./style.module.css";
import { DEFAULT_LABEL } from "../../constants";

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
