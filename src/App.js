import { useState } from 'react';
import TodoList from './pages/TodoList';

function App() {

  let [posts, setPosts] = useState([
    {
      id: 0,
      title: '리액트 공부하기',
      body: '리액트 기초를 공부해봅시다',
      isDone: false
    },
    {
      id: 1,
      title: '자바스크립트 공부하기',
      body: '자바스크립트를 공부해봅시다',
      isDone: true
    },
    {
      id: 2,
      title: '브라우저 동작 원리 공부하기',
      body: '브라우저 동작 원리를 공부해보자',
      isDone: true
    },
  ])

  return (
    <div className="App">
      <TodoList posts={posts} setPosts={setPosts}/>
    </div>
  );
}

export default App;