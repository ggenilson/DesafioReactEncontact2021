/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useContext } from 'react';

import { MainFormFooter, CenterItems, CenterItem } from './styles';

import { TodoContext } from '../../contexts';
import { Link } from 'react-router-dom';
import history from '../../services/history';

const FormFooter: FC = () => {
  const [all, setAll] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);
  const { todos, clearTodos } = useContext(TodoContext);

  function checkOptionAsActive(checked: number) {
    setAll(false);
    setActive(false);
    setCompleted(false);

    switch (checked) {
      case 1:
        setAll(true);
        break;
      case 2:
        setActive(true);
        break;
      case 3:
        setCompleted(true);
        break;
      default:
        break;
    }
  }

  function handleClearTodo() {
    clearTodos();
  }

  function getRemainingTodos() {
    return todos.filter(({ isDone }) => isDone === false).length;
  }

  useEffect(() => {
    getRemainingTodos();
  }, [todos]);

  return (
    <MainFormFooter>
      <span>{getRemainingTodos()} item left</span>

      <CenterItems>
        <CenterItem isActive={all} onClick={() => checkOptionAsActive(1)}>
          <Link to="/">All</Link>
        </CenterItem>

        <CenterItem isActive={active} onClick={() => checkOptionAsActive(2)}>
          <Link to="/active">Active</Link>
        </CenterItem>

        <CenterItem isActive={completed} onClick={() => checkOptionAsActive(3)}>
          <Link to="/completed">Completed</Link>
        </CenterItem>
      </CenterItems>

      <span className="clear-todo" onClick={() => handleClearTodo()}>
        Clear completed
      </span>
    </MainFormFooter>
  );
};

export default FormFooter;
