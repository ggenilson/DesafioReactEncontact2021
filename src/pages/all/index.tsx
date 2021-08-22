import { FC, useContext } from 'react';

import { TodoContext } from '../../contexts/todosContext';

import Form from '../../components/Form';

const All: FC = () => {
  const { todos } = useContext(TodoContext);

  return <Form data={todos} />;
};

export default All;
