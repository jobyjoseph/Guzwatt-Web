type QuestionProps = {
  data: string;
};

export const Question = ({ data }: QuestionProps) => {
  return <div>{data}</div>;
};
