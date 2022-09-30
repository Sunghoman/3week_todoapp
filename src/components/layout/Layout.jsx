import './style.css'

import { useRef, useState } from 'react';

import Header from '../header/Header';
import Form from '../form/Form';


const Layout = (props) => {

  console.log(props.posts)
  const [inputs, setInputs] = useState({
    title: '',
    body: '',
  });
  const { title, body } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const nextId = useRef(4);
  const onCreate = () => {
    const post = {
      id: nextId.current,
      title,
      body,
      isDone: false
    }
    props.setPosts([...props.posts, post])
    setInputs({
      title: '',
      body: ''
    })
    nextId.current += 1;
  }

  const onRemove = id => {
    props.setPosts(props.posts.filter(post => post.title !== title))
  }

  return(
    <div>
      <Header/>
      <Form posts={props.posts} setPosts={props.setPosts} onChange={onChange} onCreate={onCreate} onRemove={onRemove} title={title} body={body}/>
    </div>
  );
};

export default Layout;