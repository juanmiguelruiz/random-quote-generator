import styled from 'styled-components';
import { SpinnerProps } from '.';

export const Spinner = styled.div<SpinnerProps>`
  display: inline-block;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};

  &:after {
    content: ' ';
    display: block;
    width: ${({ width }) => `${width && width - 16}px`};
    height: ${({ height }) => `${height && height - 16}px`};
    margin: 8px;
    border-radius: 50%;
    border: ${({ color }) => `6px solid ${color}`};
    border-color: ${({ color }) => `${color} transparent ${color} transparent`};
    animation: spinner 1.2s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
