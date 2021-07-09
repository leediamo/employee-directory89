import React, { Component } from "react";
import axios from "axios";
import "./api.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [], };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=3")
      .then(response => {
        console.log(response.data.results);
        this.setState({ users: response.data.results });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    let sortedUsers;

    if (this.state === "") {
      console.log("sort");
      sortedUsers = this.state.users.sort((a) =>
        a.name.first 
      );
    } else {
      sortedUsers = this.state.users.sort((a) =>
        a.name.first 
      );
    }

    let filteredUsers = sortedUsers;


    const userNames = filteredUsers.map(u => {
      return <User key={u.email} name={u.name.first} age={u.dob.age} />;
    });
    return (
      <div className="p-8">
        <div className="bg-white flex items-center rounded-full shadow-xl">
          <input
            type="text"
            name="searchTerm"
            placeholder="Search"
            onChange={this.handleChange}
            className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            disabled
          />

          <div className="p-4">
            <button  className=" btn-links text-white rounded-full p-2 focus:outline-none w-12 h-12 flex items-center justify-center">
              <img src="icons8-search-24.png" />
            </button>
          </div>
        </div>

        <div className="drink-wrap">
          <div className="drink-content">
            <div className="drink-background">
             
              <div className="">
                <h1 
                onChange={this.handleChange}
                className="drink-title">
                
                 {userNames}
                </h1>
              </div>
            </div>
          </div>
          </div>



        </div>
        );
  }
}
        class User extends Component {
          render() {
    return (
        <div>
          <h2>name: {this.props.name}</h2>
          <h3>age: {this.props.age}</h3>
        </div>
        );
  }
}

        export default App;