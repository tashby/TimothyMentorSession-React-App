import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserWidget from './components/UserWidget';
import $ from 'jquery'

class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const apiUrl = 'http://api.randomuser.me/?results=5';

    $.ajax({
     url: apiUrl,
     dataType: 'json',
     cache: false,
     success: (response) => {
       this.setState({ users: response.results })
     },
     error: (xhr, status, err) => {
       console.log(err)
     }
   })
  }

  deleteUser(cell) {
    // TODO: Delete a user from this.state.users & return the users
  }

  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        {this.state.users.map((user) => <UserWidget key={user.cell} user={user} /> )}
      </div>
    );
  }
}

export default App;
