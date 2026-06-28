import { useState } from "react";
import "./App.css";
import { UserForm, GithubRepoos, GithubUser } from "./components";

function App() {
  const { user, setUser } = useState("1");

  if (user) {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }

  return (
    <div className="App">
      <GithubUser />
      <GithubRepoos />
    </div>
  );
}

export default App;
