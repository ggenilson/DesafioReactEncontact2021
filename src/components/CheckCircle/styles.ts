import styled from 'styled-components';

export const MainCheckCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid rgb(236 236 236);
  border-radius: 30px;
  cursor: pointer;

  div {
    transform: rotate(-45deg);
    padding: 6px;
    padding-left: 12px;
    box-shadow: 2px -2px 0 1px rgb(97, 196, 177) inset;
    border: solid transparent;
    border-width: 0 0 4px 4px;
  }
`;
