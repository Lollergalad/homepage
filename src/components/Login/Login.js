import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Authentication";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    if (username && password) {
      signIn(username, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
