import { RootLayout } from "@/components/layouts/layout";
import { useState } from "react";
import styles from "./style.module.scss";

export function PlayPage() {
  const [inputArr, setInputArray] = useState<string[]>([]);
  const questionItem = {
    question:
      "A feeling of expectation and desire for a certain thing to happen",
    answer: "HOPE",
    scrambledAnswer: "EOHP",
  };
  const [currentQuestion, setCurrentQuestion] = useState(questionItem);

  const handleKeyClick = (letter: string) => {
    const arr = [...inputArr, letter];
    if (arr.length >= currentQuestion?.answer?.length) {
      arr.length = currentQuestion?.answer?.length;
    }
    console.log(arr);

    setInputArray(arr);
  };

  return (
    <RootLayout>
      <div>
        <span className={styles?.slno}>#1</span>
      </div>
      <div className={styles?.question}>{currentQuestion?.question}</div>
      <div className={styles?.inputBoxWrapper}>
        <span className={styles?.wordWrapper}>
          {currentQuestion?.answer?.split("")?.map((item, index) => {
            if (!inputArr?.[index]) {
              return <span key={index} className={styles?.inputBox}></span>;
            } else {
              return (
                <span key={index} className={styles?.inputBox}>
                  {inputArr?.[index]}
                </span>
              );
            }
          })}
        </span>
      </div>
      <div className={styles?.keysWrapper}>
        {currentQuestion?.scrambledAnswer?.split("")?.map((item, index) => {
          return (
            <button
              className={styles?.key}
              key={`btn${index}`}
              onClick={() => handleKeyClick(item)}
            >
              {item}
            </button>
          );
        })}

        <button
          className={`${styles?.key} ${styles?.backspace}`}
          key="backspace"
        >
          &#9003;
        </button>
      </div>
      <div className={styles?.submitButtonWrapper}>
        <button>SUBMIT</button>
      </div>
    </RootLayout>
  );
}
