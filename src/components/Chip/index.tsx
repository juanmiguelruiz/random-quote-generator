import { PropsWithChildren } from 'react';
import * as Styled from './styles';
const Chip = ({ children }: PropsWithChildren) => (
  <Styled.Container>
    <span>{children}</span>
  </Styled.Container>
);

export default Chip;
