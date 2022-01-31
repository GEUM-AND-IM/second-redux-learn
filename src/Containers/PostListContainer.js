import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostList from "../Components/PostList";
import { getPosts } from "../modules/posts";

const PostListContainer = () => {
  const { data, loading, error } = useSelector((state) => state.posts.posts);

  useEffect(() => console.log(loading), [loading]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {loading ? <>로딩중...</> : <> {data && <PostList posts={data} />}</>}
    </div>
  );
};

export default PostListContainer;
