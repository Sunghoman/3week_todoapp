import './style.css'

const Todo = ({ posts, setPosts, i, todo, setBtn }) => {
  // console.log("궁금한거 : " + [...posts])
  return(
    <div>
      <div className='card' key={ todo.id }>
        <h3>{ todo.title }</h3>
        <p>{ todo.body }</p>
        <div className='buttons'>
          <button onClick={(e) => {
            const todo_box = e.target.parentElement.parentElement
            todo_box.remove()
          }}>삭제하기</button>
          <button onClick={() => {
            setBtn(todo);
          }}>{ todo.isDone }</button>
        </div>
      </div>
    </div>
  )  
};

export default Todo;