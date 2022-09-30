import './style.css'

import Todo from '../todo/Todo';

const List = ({ posts, onRemove, setPosts }) => {
  return(
    <div>
      <h2>Working...</h2>
      <Todo posts={posts} onRemove={onRemove} setPosts={setPosts}/>
      <hr/>
      <h2>Done...!</h2>
    </div>
  );
};

export default List;