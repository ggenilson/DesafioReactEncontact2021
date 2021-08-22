import { FC, useContext } from 'react';

import { TodoContext } from '../../contexts/todosContext';

import Form from '../../components/Form';

const Completed: FC = () => {
  const { todos } = useContext(TodoContext);

  function getAllCompletedTodos() {
    return todos.filter(item => item.isDone === true);
  }

  return <Form data={getAllCompletedTodos()} />;
};

export default Completed;
