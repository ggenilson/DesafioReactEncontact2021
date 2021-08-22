import styled from 'styled-components';

export const MainFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  span {
    color: rgb(212, 212, 212);
    font-size: 15px;
    margin-bottom: 5px;

    a {
      color: rgb(123, 123, 123);

      &:hover {
        border-bottom: 1px solid rgb(123, 123, 123);
      }
    }
  }
`;
