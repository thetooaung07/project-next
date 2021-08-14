import React, { useEffect, useState } from "react";
import cls from "./MainPage.module.css";
import { generate } from "../../Utilities/generate-words";
import useKeyPress from "../../Utilities/useKeyPress";

export default function MainPage() {
  const [leftPadding, setLeftPadding] = useState(
    new Array().fill(" ").join("")
  );
  const [outgoingChars, setOutgoingChars] = useState("");
  const [currentChar, setCurrentChar] = useState();
  const [incomingChars, setIncomingChars] = useState();

  useEffect(() => {
    const initialWords = generate();
    console.log(initialWords);
    setCurrentChar(initialWords.charAt(0));
    setIncomingChars(initialWords.substring(1));
  }, []);

  useKeyPress((key) => {
    //1
    let updatedOutgoingChars = outgoingChars;
    let updatedIncomingChars = incomingChars;

    //2
    if (key === currentChar) {
      //3
      if (leftPadding.length > 0) {
        setLeftPadding(leftPadding.substring(1));
      }
      //4
      updatedOutgoingChars += currentChar;
      setOutgoingChars(updatedOutgoingChars);

      //5
      setCurrentChar(incomingChars.charAt(0));

      //6
      updatedIncomingChars = incomingChars.substring(1);
      if (updatedIncomingChars.split(" ").length < 10) {
        updatedIncomingChars += " " + generate();
      }
      setIncomingChars(updatedIncomingChars);
    }
  });

  return (
    <div className={cls.MainPage}>
      {incomingChars && (
        <p className={cls.Character}>
          <span className={cls.Character_out}>
            {(leftPadding + outgoingChars).slice(-20)}
          </span>
          <span className={cls.Character_current}>{currentChar}</span>
          <span>{incomingChars.substr(0, 20)}</span>
        </p>
      )}
    </div>
  );
}
