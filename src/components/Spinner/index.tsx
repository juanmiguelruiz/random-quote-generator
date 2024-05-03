import * as Styled from './styles';

export interface SpinnerProps {
  color?: string;
  height?: number;
  width?: number;
}

const Spinner = ({
  color = '#f3f3f3',
  height = 80,
  width = 80,
}: SpinnerProps): JSX.Element => (
  <Styled.Spinner color={color} height={height} width={width} />
);

export default Spinner;
