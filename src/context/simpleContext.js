import { createContext } from 'react';

const SimpleContext = createContext({
  todos: [],
  handleNewTodo: () => { },
  inputOnChenge: () => { },
  handleDeleteTodo: () => { }
})
export default SimpleContext