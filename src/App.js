
import './App.css';
import Counter from './Component/Counter';
import PostView from './Component/PostSlice/PostView';
import TodoView from './Component/TodoSlice/TodoView';





function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
     <Counter/>
     <TodoView/>
     <PostView/>
    
    
 
    </div>
  );
}

export default App;
