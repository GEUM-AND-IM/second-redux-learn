import PostContainer from "../Containers/PostContainer";

const PostPage = ({ match }) => {
  const { id } = match.params;
  const postId = parseInt(id, 10);

  return (
    <div>
      <PostContainer postId={postId} />
    </div>
  );
};

export default PostPage;
