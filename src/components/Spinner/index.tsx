import { ReactElement } from 'react';

const Spinner = (): ReactElement => (
  <div className="inline-block size-8">
    <div className="size-10 m-1 border-5 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
