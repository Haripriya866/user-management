import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import axios from "axios";

import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";

import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       this.setState({ users: response.data });
  //     })
  //     .catch((error) => {
  //       this.setState({ error: "Failed to fetch users." });
  //       console.error(error);
  //     });
  // }

  addUser = (newUser) => {
    this.setState((prevState) => ({
      users: [...prevState.users, newUser],
    }));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <h1>User Management</h1>
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route exact path="/users" component={AddUser} />
            <Route exact path="/users/:id" component={UpdateUser} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
