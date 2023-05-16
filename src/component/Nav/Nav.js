import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [linkText, setLinkText] = useState("Your favorites");
  

  return (
    <div className="Nav">
      <div>
        <h1>Books Website</h1>
      </div>
      {linkText === "Your favorites" ? (
        <Link onClick={()=>{setLinkText("Home")}} className="nav-link" to="/Books/favorites">
          <h3>Your favorites</h3>
        </Link>
      ) : (
        <Link onClick={()=>{setLinkText("Your favorites")}}  className="nav-link" to="/Books/Bookslist">
          <h3>Home</h3>
        </Link>
      )}
    </div>
  );
}

export default Nav;
