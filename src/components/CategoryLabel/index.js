import React from "react";
import { label, textWrapper, activeState } from "./style.module.css";
import { DEFAULT_LABEL } from "../../constants";

export const CategoryLabel = ({ categoryLabel, active, onSelect }) => {
  const onClickLabel = (e) => {
    if (active) {
      onSelect(DEFAULT_LABEL);
      return;
    } else {
      onSelect(categoryLabel);
    }
  };
  return (
    <button
      type="button"
      className={`${label} ${active ? activeState : DEFAULT_LABEL}`}
      onClick={onClickLabel}
    >
      <div className={textWrapper}>{`#${categoryLabel}`}</div>
    </button>
  );
};
