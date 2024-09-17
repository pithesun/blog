import React from "react";
import { copyLink } from "./style.module.css";

export const Contact = () => {
  const copyText = async (text) => {
    if (!text || typeof text !== "string") throw new Error("copy text error");
    try {
      await navigator.clipboard.writeText(text);
      alert("복사되었습니다.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2>Contact</h2>
      <ul>
        <li>
          Email.{" "}
          <span
            onClick={(event) => {
              event.preventDefault();
              copyText(event.target.textContent);
            }}
            className={copyLink}
          >
            wonjh0201@gmail.com
          </span>{" "}
        </li>
        <li>
          {" "}
          github.{" "}
          <a
            style={{ display: "inline", fontStyle: "italic" }}
            href="https://github.com/pithesun"
          >
            pithesun
          </a>
        </li>
      </ul>
    </>
  );
};
