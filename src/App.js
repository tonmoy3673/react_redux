
import './App.css';
import CommentView from './Component/Comments/CommentView';
import PostView from './Component/PostSlice/PostView';






function App() {
  return (
    <div className="App">
      <h1>React-Redux</h1>
   
     
     <PostView/>
    <CommentView/>

 
    </div>
  );
}

export default App;
