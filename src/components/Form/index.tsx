/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useContext } from 'react';

import {
  MainHeader,
  MainInput,
  MainBody,
  BodyItem,
  Left,
  BtnDelete,
} from './styles';

import CheckCircle from '../CheckCircle';
import FormFooter from '../FormFooter';

import { FormType } from './types';
import { TodoContext } from '../../contexts';

const Form: FC<FormType> = ({ data }) => {
  const [countClick, setCountClick] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [indexClicked, setIndexClicked] = useState<number>(0);
  const [valueClicked, setValueClicked] = useState<string>('');
  const { todos, setTodos, ModifyAllTodos } = useContext(TodoContext);

  function addTodo(value: string) {
    setTodos({
      id: Date.now().toString(),
      title: value,
      isDone: false,
    });

    setInputValue('');
  }

  function markAllTodosAsActive() {
    const newTodos = todos.map(({ id, title }) => ({
      id,
      title,
      isDone: true,
    }));

    ModifyAllTodos(newTodos);
  }

  function handleDeleteTodo(idCompare: number) {
    const newTodos = todos.filter((_, index) => index !== idCompare);

    ModifyAllTodos(newTodos);
  }

  function handleCheckClick(index: number) {
    const newTodos = todos.map(({ id, title, isDone }, pos) => ({
      id,
      title,
      isDone: pos === index ? !isDone : isDone,
    }));

    ModifyAllTodos(newTodos);
  }

  function handleBodyItemClick(value: string, index: number) {
    setCountClick(() => {
      return valueClicked !== value ? 0 : countClick + 1;
    });

    setValueClicked(value);
    setIndexClicked(index);
  }

  function editTodo(pos: number) {
    const newTodos = todos.map(({ id, title, isDone }, index) => ({
      id,
      title: index === pos ? valueClicked : title,
      isDone,
    }));

    ModifyAllTodos(newTodos);
  }

  useEffect(() => {
    if (countClick === 1) {
      setInputValue(valueClicked);
    }
  }, [countClick]);

  return (
    <MainHeader>
      <MainInput>
        <div
          className="btn-mark-all-as-active"
          onClick={() => markAllTodosAsActive()}
        />

        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          onKeyDown={e =>
            e.key === 'Enter' && inputValue && countClick >= 0
              ? editTodo(indexClicked)
              : addTodo(inputValue)
          }
        />
      </MainInput>

      <MainBody>
        {data?.map(({ id, title, isDone }, index) => (
          <BodyItem
            key={id}
            onClick={() => handleBodyItemClick(title || '', index)}
          >
            <Left isDone={isDone}>
              <CheckCircle
                checked={isDone}
                onClick={() => handleCheckClick(index)}
              />

              <span>{title}</span>
            </Left>

            <BtnDelete onClick={() => handleDeleteTodo(index)}>
              <span className="btn-remove-todo">x</span>
            </BtnDelete>
          </BodyItem>
        ))}
      </MainBody>

      <FormFooter />
    </MainHeader>
  );
};

export default Form;
