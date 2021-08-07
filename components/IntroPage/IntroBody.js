import React from 'react'
import cls from "./IntroBody.module.css"
import { ChevronRight } from "../icons/Icons";

export default function IntroBody() {
   return (
      <div className={cls.introBody}>
      <div>
        <h2>Project</h2>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis fugit odio nam aliquam harum velit beatae aspernatur
        dolores repellat corrupti.
      </p>

      <div className={cls.btnGroup}>
        <button className={cls.btnExplore}>
          Explore&thinsp;<ChevronRight></ChevronRight>
        </button>
        <button className={cls.btnMore}>
          More&thinsp;<ChevronRight></ChevronRight>
        </button>
      </div>
    </div>
   )
}
