import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[];
  todoId: number | null;
  setTodoId: (value: number) => void
};

export const TodoList: React.FC<Props> = ({ todos, todoId, setTodoId }) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => {
        const { id, completed, title } = todo;

        return (
          <tr
            key={id}
            data-cy="todo"
            className={classNames(
              { 'has-background-info-light': todoId === id },
            )}
          >
            <td className="is-vcentered">{id}</td>
            <td className="is-vcentered">
              {completed && (
                <span className="icon" data-cy="iconCompleted">
                  <i className="fas fa-check" />
                </span>
              )}
            </td>
            <td className="is-vcentered is-expanded">
              <p className={classNames(
                { 'has-text-danger': !completed },
                { 'has-text-success': completed },
              )}
              >
                {title}
              </p>
            </td>
            <td className="has-text-right is-vcentered">
              <button
                data-cy="selectButton"
                className="button"
                type="button"
                onClick={() => setTodoId(id)}
              >
                <span className="icon">
                  <i className={classNames(
                    'far',
                    { 'fa-eye-slash': todoId === id },
                    { 'fa-eye': todoId !== id },
                  )}
                  />
                </span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
