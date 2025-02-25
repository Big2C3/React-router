import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GithubUsers from "./pages/GithubUsers";
import GithubUser from "./components/GithubUser";
import GithubUserList from "./pages/GithubUserList";

function App() {
  return (
    <>
      <nav>
        <Link to="/" >Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/users">Github Users</Link>
      </nav>
      <Routes>
        <Route />
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users" element={<GithubUserList />} >
          <Route path="/users/:username" element={<GithubUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;