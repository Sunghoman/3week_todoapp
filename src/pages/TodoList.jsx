import Layout from "../components/layout/Layout";

const TodoList = (props) => {
  // console.log(props.post[0])
  return(
    <div>
      <Layout posts={props.posts} setPosts={props.setPosts}/>
    </div>
  )
}

export default TodoList;