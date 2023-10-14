type SubmitButtonProps = {
  onClick: any;
  isSubmitEnabled: any;
};

export const SubmitButton = ({
  onClick,
  isSubmitEnabled,
}: SubmitButtonProps) => {
  return (
    <div>
      <button onClick={onClick} disabled={!isSubmitEnabled}>
        Submit
      </button>
    </div>
  );
};
