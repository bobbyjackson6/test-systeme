type EditButtonProps = {
  onClick: () => void;
};

export const EditButton = ({ onClick }: EditButtonProps) => {
  return <button onClick={onClick}>edit</button>;
};
