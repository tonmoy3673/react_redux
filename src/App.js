
import './App.css';
import CommentView from './Component/Comments/CommentView';

import PostView from './Component/PostSlice/PostView';
import TodoView from './Component/TodoSlice/TodoView';







function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
     
     
     <CommentView/>
     <TodoView/>
    <PostView/>
    </div>
  );
}

export default App;
