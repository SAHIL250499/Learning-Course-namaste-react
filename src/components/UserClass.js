import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "ABC",
        location: "Null",
        avatar_url: "http://dummy",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child ComponentDidMount");
    //Api call

    const data = await fetch("https://api.github.com/users/SAHIL250499");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Update");
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
