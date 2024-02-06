import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { UserContext } from "../context/UserContext";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const { user } = useContext(UserContext);
  //console.log(user);
  const showMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="flex items-center justify-between px-6 md:px-[200px] py-4 font-family-poppins ">
      <h1 className="text-xl font-extrabold">
        <Link to="/">Blog Market</Link>
      </h1>
      <div className="flex justify-center items-center space-x-0">
        <p>
          <IoSearch />
        </p>
        <input
          className="outline-none px-3 "
          placeholder="Search a post"
          type="text"
        />
      </div>
      <div className="hidden md:flex items-center justify-center space-x-2 md:space-x-4 ">
        {" "}
        {/* on medium screen the display is set to flex from hidden  */}
        {user ? (
          <h3>
            <Link to="/write">Write</Link>
          </h3>
        ) : (
          <h3>
            {" "}
            <Link to="/login">Login</Link>{" "}
          </h3>
        )}
        {user ? (
          <div onClick={showMenu}>
            <p className="cursor-pointer relative">
              <FaBars />
            </p>
            {menu && <Menu />}
          </div>
        ) : (
          <h3>
            <Link to="/register">Register</Link>
          </h3>
        )}
      </div>
      <div onClick={showMenu} className="md:hidden text-lg">
        <p className="cursor-pointer relative">
          <FaBars />
        </p>
        {menu && <Menu />}
      </div>
    </div>
  );
};

export default Navbar;
