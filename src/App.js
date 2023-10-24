
import './App.css';
import CommentView from './Component/Comments/CommentView';
import Counter from './Component/Counter';
import PostView from './Component/PostSlice/PostView';






function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
   
     <Counter/>
     <PostView/>
    <CommentView/>

 
    </div>
  );
}

export default App;
