import "./styles/App.scss";
import React, { useContext, useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import { AppContext, AppProvider } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import Header from './components/Header'
import axios from 'axios'

function App() {
  const { user, dispatch } = useContext(AppContext);
  // const [loggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       // if user is logged in
  //       dispatch({
  //         type: "SET_USER",
  //         authUser: user,
  //       });
  //     } else {
  //       // if user is logged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  //   console.log({ user });
  //   // clean up operation
  //   unsubscribe();
  // }, []);
  const [users, setUser] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/getusers').then((response) => {
      console.log(response.data)
      setUser(response.data)
    })
  }, [])

  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route exact path="/">
              <Header />

              <HomePage users={users}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );

}

export default App;
