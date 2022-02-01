const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const posts = [
  {
    id: 1,
    title: "리액트 보일플레이트 만들기",
    body: "cra 사용하지 마세요!",
  },
  {
    id: 2,
    title: "리액트 레코일 적용하여 렌더링 최적화 하기",
    body: "레코일을 사용하면서 렌더링을 최적화 해봐요!",
  },
  {
    id: 3,
    title: "리덕스 미들웨어 배워보기",
    body: "비동기 작업은 리덕스 미들웨어면 손쉽게 가능하죠!",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};
export const getPostById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
