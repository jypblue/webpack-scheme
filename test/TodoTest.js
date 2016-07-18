/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-07-18 18:25:15
 * @version $Id$
 */
import expect from 'expect';
import * as actions from '../src/js/actions/rxTodoActions';
import * as types from '../src/js/constants/rxTodoActionTypes';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  })
})
