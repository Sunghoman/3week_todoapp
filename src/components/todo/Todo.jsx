import './style.css'

const Todo = ({ posts, onRemove, setPosts }) => {
  
  return(
    <div>
      {
        posts.map((a, i) => {
          return(
            <div className='card' key={ posts[i].id }>
              <h3>{ posts[i].title }</h3>
              <p>{ posts[i].body }</p>
              <div className='buttons'>
                <button onClick={() => {
                  let copy = [...posts]
                  copy.splice(i, 1);
                  setPosts(copy);
                }}>삭제하기</button>
                <button>완료</button>
              </div>
            </div>
          )
        })
      }
    </div>
  )
    // {
    //   [1,2,3].map(() => {
    //     reuturn(
    //       <div>asd</div>
    //     )
    //   })
    // }
  
};

export default Todo;