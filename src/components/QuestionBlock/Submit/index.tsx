type SubmitButtonProps = {
  onClick: any;
};

export const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>Submit</button>
    </div>
  );
};
