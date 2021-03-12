import { Provider } from "react-redux";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import store from './store'

function App() {
  return (
    <div className="App container bg-secondary">
      <div className="d-flex align-items-center flex-column p-3">
         
        <Provider store={store}>
          <TodoForm />
          <TodoList />
        </Provider>
      </div>
    </div>
  );
}

export default App;
