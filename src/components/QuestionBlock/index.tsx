import { Blanks } from "./Blanks/index";
import { Keys } from "./Keys/index";
import { Question } from "./Question/index";

export const QuestionBlock = () => {
  return (
    <div>
      <div>
        <Question />
      </div>
      <div>
        <Blanks />
      </div>
      <div>
        <Keys />
      </div>
    </div>
  );
};
