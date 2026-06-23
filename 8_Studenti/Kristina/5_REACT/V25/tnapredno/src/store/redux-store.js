import { createStore } from "redux";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_ALL_COMLPETED = "REMOVE_ALL_COMPLETED";

const initialState = {
  todos: JSON.parse(localStorage.getITEM("todos")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state, action.payload] };
    case DELETE_TODO:
      return state;
    case REMOVE_ALL_COMLPETED:
      const newTodos = state.todos.filter((todo) => !todo.completed);
      return { todos: newTodos };
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
