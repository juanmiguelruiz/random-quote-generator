import { ReactElement } from 'react';

const Spinner = (): ReactElement => (
  <div className="inline-block w-8 h-8">
    <div className="w-10 h-10 m-1 border-5 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default Spinner;
