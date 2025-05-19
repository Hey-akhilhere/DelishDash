import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/problem-solver24");
    const json = await data.json();
    console.log(json);
    this.setState({
      userinfo: json,
    });
  }

  render() {
    
    const { name, location, avatar_url } = this.state.userinfo;

    return (
      <div className="user">
        <h1> Name : {name}</h1>
        <h2 className="user-loc"> location : {location}</h2>
        <img className="user-img" src={avatar_url}/>
      </div>
    );
  }
}

export default UserClass;
