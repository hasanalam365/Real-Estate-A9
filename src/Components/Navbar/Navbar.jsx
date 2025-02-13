import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
    const { signOutInUser, user } = useContext(AuthContext)
    console.log(user)
    const navLinks =

        <>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            {
                user && <li>
                    <NavLink to='/updateprofile'>Update Profile</NavLink>
                </li>
            }


            {
                user && <li>
                    <NavLink to='/userprofile'>User Profile</NavLink>
                </li>
            }
            <li>
                <NavLink to='/register'>Register</NavLink>
            </li>
            <li>
                <NavLink to='/clients'>Clients</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>

        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">

                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Dream House</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-12 font-medium text-lg">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end space-x-5 ">
                {
                    user ? <div className="flex gap-3 lg:gap-5 items-center">

                        <div className="grid  w-10 h-10 lg:w-12 lg:h-12 bg-base-300 place-items-center rounded-full tooltip tooltip-left" data-tip={user.displayName
                        }>

                            <img className="rounded-full" src={user.photoURL} alt="" />
                        </div>
                        <div>
                            <button onClick={signOutInUser} className="btn btn-secondary font-bold">Log Out</button>
                        </div>
                    </div>

                        :
                        <Link to='/login' >
                            <button className="btn btn-secondary font-bold">Login</button>

                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;