import { memo } from 'react';

type ContentProps = {
  onIncrease: React.MouseEventHandler<HTMLButtonElement>;
};
const Content = (props: ContentProps) => {
  console.log('re-render');
  return (
    <>
      <h1>Hello people</h1>
      <button onClick={props.onIncrease}>Increase</button>
    </>
  );
};
export default memo(Content);
