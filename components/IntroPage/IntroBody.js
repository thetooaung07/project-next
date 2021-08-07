import React from "react";
import cls from "./IntroBody.module.css";
import { ArrowRightCircle, ChevronRight } from "../icons/Icons";

export default function IntroBody() {
  return (
    <div className={cls.introBody}>
      <div>
        <h2>Project</h2>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        fugit odio nam aliquam harum velit beatae aspernatur dolores repellat
        corrupti.
      </p>

      <div className={cls.btnGroup}>
        <button className={cls.btnExplore}>
          <span>E</span>
          <span>x</span>
          <span>p</span>
          <span>l</span>
          <span>o</span>
          <span>r</span>
          <span>e</span>
          <span className={cls.chevronRight}>
            <ChevronRight ></ChevronRight>
          </span>
        </button>
        <button className={cls.btnMore}>
          More&thinsp;<ArrowRightCircle></ArrowRightCircle>
        </button>
      </div>
    </div>
  );
}
