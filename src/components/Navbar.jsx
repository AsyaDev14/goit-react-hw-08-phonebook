import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn} from "../redux/auth/authSelectors";
import { UserMenu } from "./UserMenu";

export const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className="navbar">

      {!isLoggedIn && (
        <>
          <NavLink to='/' className={'navlinks'}>Home</NavLink>
          <NavLink to='/register' className={'navlinks'}>SignUp</NavLink>
          <NavLink to='/login' className={'navlinks'}>Login</NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <UserMenu />
        </>
      )}
    </div>
  )
}
