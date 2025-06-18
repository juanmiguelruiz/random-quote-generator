import { PropsWithChildren, ReactElement } from 'react';

const Chip = ({ children }: PropsWithChildren): ReactElement => (
  <div className="flex border border-indigo-700 rounded-full px-2 py-1">
    <span className="text-[10px] capitalize text-indigo-700 font-medium">{children}</span>
  </div>
);

export default Chip;
