import { PostProps } from "./types/type"

const Post = (props: PostProps) => {
   return (
      <>
         <div>{props.title}</div>
         <div>{props.body}</div>
      </>
   )
}

export default Post