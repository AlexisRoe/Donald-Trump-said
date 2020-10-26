import { createElement, styled } from "../utils/elements";
import "./Meme.css";

export function Meme(quote, tag = "") {
  const meme = createElement("div", {
    children: [
      createElement("div", {
        innerText: quote,
        className: "meme",
      }),
      createElement("p", {
        className: "meme--author",
        innerText: tag,
      }),
    ],
  });

  return meme;
}
export function Placeholder(quote, tag = "") {
  const meme = createElement("div", {
    children: [
      createElement("div", {
        innerText: quote,
        className: "placeholder",
      }),
      createElement("p", {
        className: "meme--author",
        innerText: tag,
      }),
    ],
  });

  return meme;
}
