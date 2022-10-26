import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Users from "./components/Users/Users";
import Signup from "./components/Signup/Signup";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Main />
        <Users />
        <Signup />
      </div>
    </>
  );
}

export default App;
