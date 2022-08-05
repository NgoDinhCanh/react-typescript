type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name, index) => {
        return (
          <h2 key={index}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};
