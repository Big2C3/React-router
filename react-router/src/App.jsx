import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GithubUsers from "./pages/GithubUsers";

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
        <Route path="/users/*" element={<GithubUsers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;