/* eslint-disable */
import styled from 'styled-components';

export const FilterBoxContainer = styled.div`
  margin: 15px;
  border: 1px solid rgb(200, 200, 200);
  flex: 1 1 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
`;

export const RadioGroupContainer = styled.div.attrs({
  className: 'RadioGroupContainer'
})`
  width: 90%;
  border: 1px solid rgb(200, 200, 200);
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

export const RadioGroupLabel = styled.span.attrs({
  className: 'RadioGroupLabel'
})`

`;

export const RadioSelectionContainer = styled.div.attrs({
  className: 'RadioSelectionContainer'
})`
  display: flex;
  flex-direction: row;
  flex-basis: 80%;
  justify-content: flex-end;
  align-items: center;
  align-content: flex-end;
`;

const ButtonBase = styled.button`
  display: flex;
  border: none;
  text-align: center;
  height: 35px;
  border: 1px solid rgb(200, 200, 200);
  font-size: 16px;
  background: ${props => props.selected ? 'rgb(33, 150, 243)' : '#fff'};
`;

export const LeftSelectionBox = ButtonBase.extend.attrs({
  className: 'LeftSelectionBox'
})`
  border-right: none;
  border-radius: 5px 0 0 5px;
`;

export const RightSelectionBox = ButtonBase.extend.attrs({
  className: 'RightSelectionBox'
})`
  border-radius: 0 5px 5px 0;
`;

