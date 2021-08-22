export type ContextDefaultValuesType = {
  todos: TodosType[];
  setTodos: (val: TodosType) => void;
  clearTodos: () => void;
  ModifyAllTodos: (val: TodosType[]) => void;
};

export type TodosType = {
  id?: string;
  title?: string;
  isDone?: boolean;
};
