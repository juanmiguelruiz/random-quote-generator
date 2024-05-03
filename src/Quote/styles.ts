import styled from 'styled-components';
import background from '../assets/bg-image-random-quote.svg';

export const Container = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  height: 100vh;
  background-color: #111729;
  gap: 16px;
`;

export const Content = styled.div`
  max-width: 475px;
  min-width: 300px;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 16px;
  background-color: #20293a;
  border-radius: 8px;
  padding: 24px 32px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position-y: bottom;

  @media screen and (max-width: 768px) {
    max-width: 250px;
    min-width: auto;
  }
`;

export const Author = styled.span`
  font-size: 16px;
`;

export const QuoteText = styled.span`
  font-size: 24px;
  opacity: 0.6;
  text-align: center;
`;

export const Flex = styled.div<{
  $gap?: string;
  $direction?: string;
  $justify?: string;
  $align?: string;
}>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'flex-start'};
  gap: ${({ $gap }) => $gap || '0'}px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #4a4e69;
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0, 0.7, 0.3, 2);

  &:hover {
    transform: scale(1.05);
    background-color: #6466e9;

    @media screen and (max-width: 768px) {
      background-color: #4a4e69;
    }
  }

  &:active {
    background-color: #6466e9;
  }
`;
