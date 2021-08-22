import { FC, useState, createContext } from 'react';
import { ContextDefaultValuesType, TodosType } from './types';

const contextDefaultValues: ContextDefaultValuesType = {
  todos: [
    { id: 'flrGI', title: 'Lavar os pratos', isDone: false },
    { id: 'Tw-I9', title: 'Cortar a grama', isDone: true },
    { id: '7f2sf', title: 'Comprar pão', isDone: false },
  ],
  setTodos: () => {},
  clearTodos: () => {},
  ModifyAllTodos: () => {},
};

export const TodoContext =
  createContext<ContextDefaultValuesType>(contextDefaultValues);

const TodoProvider: FC = ({ children }) => {
  const [todos, setTodosInfo] = useState<TodosType[]>(
    contextDefaultValues.todos
  );

  const setTodos = (value: TodosType) => setTodosInfo([...todos, value]);

  const clearTodos = () => setTodosInfo([]);

  const ModifyAllTodos = (value: TodosType[]) => setTodosInfo(value);

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        clearTodos,
        ModifyAllTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
