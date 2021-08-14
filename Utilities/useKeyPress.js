import { useState, useEffect } from "react";

const useKeyPress = (callback) => {
  const [keyPressed, setKeyPressed] = useState();

  useEffect(() => {
    const keydownHandler = ({ key }) => {
      if (!keyPressed !== key && key.length === 1) {
        setKeyPressed(key);
        callback && callback(key);
      }
    };

    const keyupHandler = () => {
      setKeyPressed(null);
    };

    window.addEventListener("keydown", keydownHandler);
    window.addEventListener("keyup", keyupHandler);

    return () => {
      window.removeEventListener("keydown", keydownHandler);
      window.removeEventListener("keyup", keyupHandler);
    };
  });

  return keyPressed;
};

export default useKeyPress;
