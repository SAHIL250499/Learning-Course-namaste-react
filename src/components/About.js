import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {(data) => (
              <h1 className="font-bold text-lg">{data.loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>About Page Namastye React</h2>

        <UserClass />
      </div>
    );
  }
}

export default About;
