
import './App.css';
import CommentView from './Component/Comments/CommentView';
import Counter from './Component/Counter';
import TodoView from './Component/TodoSlice/TodoView';







function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
     <Counter/>
     <CommentView/>
     <TodoView/>
 
    </div>
  );
}

export default App;
