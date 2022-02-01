import { Route, Switch } from "react-router-dom";
import PostListPage from "./Pages/PostListPage";
import PostPage from "./Pages/PostPage";

function App() {
  return (
    <Switch>
      <Route exact path={"/"} component={PostListPage} />
      <Route path={"/:id"} component={PostPage} />
    </Switch>
  );
}

export default App;
