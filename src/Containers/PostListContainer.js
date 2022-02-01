import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../Components/PostList";
import { getPosts } from "../modules/posts";

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <>{error ? "에러 발생" : <>{!data && "로딩중"}</>}</>
      ) : (
        <> {data && <PostList posts={data} />}</>
      )}
    </div>
  );
};

export default PostListContainer;
