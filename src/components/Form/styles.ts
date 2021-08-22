import styled from 'styled-components';

export const MainHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInput = styled.div`
  display: flex;

  div {
    transform: rotate(-45deg);
    position: absolute;
    margin-left: 20px;
    padding: 8px;
    box-shadow: 2px -2px 0 1px rgb(236, 236, 236) inset;
    border: solid transparent;
    border-width: 0 0 4px 4px;
    align-self: center;
    cursor: pointer;
  }

  input {
    width: 500px;
    height: 10px;
    padding: 35px;
    padding-left: 65px;
    border: none;
    font-size: 20px;
    border-bottom: 2px solid rgb(236, 236, 236);

    ::placeholder {
      color: rgb(163, 163, 163);
      font-size: 20px;
      font-style: italic;
    }
  }
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  border-bottom: 2px solid rgb(236, 236, 236);
  user-select: none;
`;

export const BodyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;

  &:hover {
    span.btn-remove-todo {
      display: flex;
    }
  }
`;

export const Left: any = styled.div`
  display: flex;
  align-items: center;

  span {
    color: rgb(79, 79, 79);
    font-size: 25px;
    margin-left: 20px;
    position: relative;

    ${(props: any) =>
      props.isDone &&
      `
        text-decoration: line-through;
        color: rgb(215, 216, 216);
      `}
  }
`;

export const BtnDelete = styled.div`
  padding-right: 20px;
  color: rgb(184, 63, 69);

  span {
    font-size: 20px;
    display: none;
  }
`;
