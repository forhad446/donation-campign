import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.png";

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <nav className="flex flex-col md:flex-row justify-between items-center py-6 px-5">

                <div>
                    <img src={Logo} alt="" />
                </div>

                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Home
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Donation
                        </NavLink>


                    </li>
                    <li>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                            }
                        >
                            Statistics
                        </NavLink>


                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;
