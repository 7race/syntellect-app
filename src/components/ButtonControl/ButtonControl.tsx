import id from "uniqid";
import style from "./ButtonControl.module.css";
import { useRef, useState } from "react";
import type { FC } from "react";

type ButtonControlProps = {
  buttonsLeft?: {
    text: string;
    callback: (inputText: string) => string;
  }[];
  buttonsRight?: {
    text: string;
    callback: (inputText: string) => string;
  }[];
};

export const ButtonControl: FC<ButtonControlProps> = ({
  buttonsLeft,
  buttonsRight,
}) => {
  const [inputText, setInputText] = useState("");
  const input = useRef<HTMLInputElement>(null);

  return (
    <div className={style.container}>
      <div className={style.btnLeft}>
        {buttonsLeft?.map(({ text, callback }) => (
          <button
            onClick={() => setInputText(callback(input.current!.value))}
            key={id()}
          >
            {text}
          </button>
        ))}
      </div>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          ref={input}
        />
      </div>
      <div className={style.btnRight}>
        {buttonsRight?.map(({ text, callback }) => (
          <button
            onClick={() => setInputText(callback(input.current!.value))}
            key={id()}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};
