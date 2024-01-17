import useToken from "../auth/useToken";
import "../style/App.css";
import "../style/index.css";

import Login from "./login/login";
import { HuchContextStore } from "../context/HuchContext";
import Index from "./index";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} token={token} />;
  } else {
    return (
      <>
        <HuchContextStore>
          <Index token={token} />
        </HuchContextStore>
      </>
    );
  }
}

export default App;
