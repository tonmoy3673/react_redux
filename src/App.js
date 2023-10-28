
import './App.css';
import CommentView from './Component/Comments/CommentView';
import Count from './Component/Count';
import Counter from './Component/Counter';
import InputForm from './Component/InputForm/InputForm';
import PostView from './Component/PostSlice/PostView';






function App() {
  return (
    <div className="App">
      <h1 className='py-5 font-semibold pt-10 text-3xl'>React-Redux</h1>
   
     <Counter/>
     <Count/>
     <InputForm/>
     <PostView/>
    <CommentView/>

 
    </div>
  );
}

export default App;
