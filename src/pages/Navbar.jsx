import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUserName } from "../redux/auth/authSelectors";
import { UserMenu } from "./UserMenu";


export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  return (
    <div className="navbar">
      {/* <NavLink to='/contacts'>Phone Book</NavLink> */}

      {!isLoggedIn && (
        <>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/register'>SignUp</NavLink>
          <NavLink to='/login'>Login</NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          {user && <h2>{user}</h2>}
          <UserMenu />
        </>
      )}
    </div>
  )
}
