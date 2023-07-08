import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div>
      <Header />
      <TodoList />
    </div>
  ) : (
    <>
      <Header />
      <h2 className="before-login">Login To Complete Your Todo List. </h2>
    </>
  );
}

export default App;
