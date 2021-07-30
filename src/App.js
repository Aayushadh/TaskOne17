import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Contact from "./components/Contact";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { useState } from "react";
function App() {
  const [flag, setFlag] = useState(false);
  const [obj, setObj] = useState({});
  const [error, setError] = useState("");
  const { REACT_APP_CLIENT_ID } = process.env;

  const onSuccess = (res) => {
    setFlag(true);
    console.log(res.profileObj);
    setObj(res.profileObj);
  };
  const onFailure = (res) => {
    setObj({});
    setError("Authentication failed, Try again");
  };
  const logout = () => {
    console.log("hello");
    setObj({});
    setFlag(false);
  };

  return (
    <div className="App">
      <h1>Assignment</h1>

      {!flag && (
        <GoogleLogin
          clientId={`${REACT_APP_CLIENT_ID}.apps.googleusercontent.com`}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}

      {flag && (
        <>
          <GoogleLogout
            clientId={`${REACT_APP_CLIENT_ID}.apps.googleusercontent.com`}
            buttonText="Logout"
            onLogoutSuccess={logout}
          />{" "}
          <br />{" "}
          <h4>
            {obj.givenName} {obj.familyName}
          </h4>
          <h4>{obj.email}</h4>
          <img src={obj.imageUrl} />
        </>
      )}
    </div>
  );
}

export default App;
