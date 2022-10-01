import './style.css'

import List from '../list/List';

import { useRef, useEffect } from 'react';

const Form = ({ posts, setPosts, title, body, onChange, onCreate, onRemove }) => {

  // 처음 input창에 focus를 동적으로 주려고 해본건데 잘 안되넹
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const onKeyPress = (e) => {
    if(e.key === 'Enter') {
      onCreate();
    }
  }

  return(
    <div>
      <div className='input'>
        <div className='input-post'>
          <label for="title">제목</label>
          <input type="text" ref={inputFocus} id="title" name="title" onChange={onChange} value={title} onKeyPress={onKeyPress}/>

          <label for="comment">내용</label>
          <input type="text" id="comment" name="body" onChange={onChange} value={body} onKeyPress={onKeyPress}/>
        </div>
        <span className='addpost' onClick={onCreate}>추가하기</span>
      </div>
      <List posts={posts} onRemove={onRemove} setPosts={setPosts}/>
    </div>
  );
};

export default Form;