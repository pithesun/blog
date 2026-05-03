import { DEFAULT_LABEL } from "../../constants";
import { groupTagsByLetter } from "../../utils";
import * as styles from "./style.module.css";
import { useState, useMemo } from "react";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const AlphaTagFilter = ({ categories, selectedTag, onSelect }) => {
  const [selectedAlpha, setSelectedAlpha] = useState(null);

  const grouped = useMemo(() => groupTagsByLetter(categories), [categories]);
  const activeLetters = new Set(Object.keys(grouped));

  const visibleGroups = selectedAlpha
    ? { [selectedAlpha]: grouped[selectedAlpha] }
    : [];

  const handleAlphaClick = (letter) => {
    setSelectedAlpha((prev) => (prev === letter ? null : letter));
  };

  const handleTagClick = (tag) => {
    onSelect(selectedTag === tag ? DEFAULT_LABEL : tag);
  };

  return (
    <div className={styles.wrapper}>
      {/* A–Z 색인 바 */}
      <div className={styles.alphaBar}>
        <button
          className={[
            styles.alphaBtn,
            styles.alphaBtnActive,
            !selectedTag ? styles.alphaBtnSelected : "",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={() => onSelect(DEFAULT_LABEL)}
          aria-label="전체 초기화"
        >
          *
        </button>
        {ALPHABET.map((letter) => {
          const active = activeLetters.has(letter);
          const selected = selectedAlpha === letter;
          return (
            <button
              key={letter}
              className={[
                styles.alphaBtn,
                active ? styles.alphaBtnActive : styles.alphaBtnDisabled,
                selected ? styles.alphaBtnSelected : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => active && handleAlphaClick(letter)}
              aria-pressed={selected}
            >
              {letter}
            </button>
          );
        })}
      </div>

      {/* 태그 그룹 */}
      <div className={styles.groups}>
        {Object.entries(visibleGroups)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([letter, tags]) => (
            <div key={letter} className={styles.group}>
              <div className={styles.groupHeader}>{letter}</div>
              <div className={styles.tagList}>
                {tags.map((tag) => {
                  const isSelected = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      className={[
                        styles.tagItem,
                        isSelected ? styles.tagItemActive : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => handleTagClick(tag)}
                      aria-pressed={isSelected}
                    >
                      <span
                        className={[
                          styles.tagBadge,
                          isSelected ? styles.tagBadgeActive : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        {tag[0]}
                      </span>
                      <span className={styles.tagName}>{tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
