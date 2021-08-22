import { FC, useContext } from 'react';

import { TodoContext } from '../../contexts/todosContext';

import Form from '../../components/Form';

const Active: FC = () => {
  const { todos } = useContext(TodoContext);

  function getAllActiveTodos() {
    return todos.filter(item => item.isDone === false);
  }

  return <Form data={getAllActiveTodos()} />;
};

export default Active;
