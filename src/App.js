import { Route, Switch } from "react-router-dom";
import PostListPage from "./Pages/PostListPage";
import PostPage from "./Pages/PostPage";
import CounterContainer from "./Containers/CounterContainer";

function App() {
  return (
    <>
      <CounterContainer />
      <Route exact path={"/"} component={PostListPage} />
      <Route path={"/:id"} component={PostPage} />
    </>
  );
}

export default App;
