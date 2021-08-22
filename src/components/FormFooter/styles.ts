import styled from 'styled-components';

export const MainFormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  background-color: #fff;
  padding: 10px;
  user-select: none;

  span {
    color: rgb(177, 177, 177);
  }

  span.clear-todo {
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid rgb(177, 177, 177);
    }
  }
`;

export const CenterItems = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CenterItem: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px;
  margin-right: 20px;
  cursor: pointer;
  border: ${(props: any) => props.isActive && '1px solid rgb(228, 228, 228)'};

  a {
    color: rgb(177, 177, 177);
  }
`;
