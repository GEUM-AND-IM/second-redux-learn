import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Components/Post";
import { reducerUtils } from "../Lib/asyncUtils";
import { clearPost, getPost } from "../modules/posts";

const PostContainer = ({ postId }) => {
  const { loading, data, error } = useSelector(
    (state) => state.posts.post[postId] || reducerUtils.initial()
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) return;
    dispatch(getPost(postId));
  }, [postId, dispatch]);

  return (
    <>
      {loading ? (
        <>{error ? "에러가 발생 했습니다" : <>{!data && "로딩중"}</>}</>
      ) : (
        <>{data && <Post post={data} />}</>
      )}
    </>
  );
};

export default PostContainer;
