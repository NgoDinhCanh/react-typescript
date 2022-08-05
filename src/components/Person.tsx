type PresonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

export const Person = (props: PresonProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  );
};
