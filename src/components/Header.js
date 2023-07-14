import { useEffect, useState } from "react";
import LOGO_URL from "../utils/constants";
const Header = () => {
  let btnName = "Login";
  const [btnNameReact, setbtnNameReact] = useState("Login");

  console.log("Header Render");

  useEffect(() => {
    console.log("UseEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              console.log(btnName);
              btnNameReact === "Login"
                ? setbtnNameReact("Logout")
                : setbtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
