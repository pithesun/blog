import React, { useState } from "react";
import { label, textWrapper, activeState } from "./style.module.css";

const DEFAULT_LABEL = "전체";
export const CategoryLabel = ({ categoryLabel, active, onSelect }) => {
  const onClickLabel = (e) => {
    if (active) {
      onSelect("");
      return;
    } else {
      onSelect(categoryLabel);
    }
  };
  return (
    <button
      className={`${label} ${active ? activeState : DEFAULT_LABEL}`}
      onClick={onClickLabel}
    >
      <div className={textWrapper}>{`#${categoryLabel}`}</div>
    </button>
  );
};
