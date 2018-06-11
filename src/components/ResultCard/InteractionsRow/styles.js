import styled from 'styled-components';

export const CardFooter = styled.div.attrs({
  className: 'CardFooter'
})`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`;

export const InteractionsContainer = styled.div.attrs({
  className: 'InteractionsContainer'
})`
  display: flex;
  flex-direction: row;
  flex-basis: 15%;
`;

export const SVGContainer = styled.div.attrs({
  className: 'SVGContainer'
})`
  margin-right: 5px;
`;

export const CountContainer = styled.span.attrs({
  className: 'CountContainer'
})`
`;
