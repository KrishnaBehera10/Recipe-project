import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
function Nav() {
  const [menu, setmenu] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setmenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="flex items-center gap-4 py-5 justify-between relative  top-0 bg-white">
      <h1 className="heading-logo text-3xl" to="/">
        Eateam
      </h1>
      <div
        className={`w-[40%] hidden sm:flex justify-evenly ${
          menu ? "open" : ""
        } `}
      >
        <RxCross2
          className={`absolute top-6 right-4 text-2xl ${
            menu ? "block" : "hidden"
          }`}
          onClick={() => setmenu(false)}
        />
        <NavLink to="/" className={(e) => (e.isActive ? "text-red-400" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/recipe"
          className={(e) => (e.isActive ? "text-red-400" : "")}
        >
          Recipe
        </NavLink>
        <NavLink
          to="/service"
          className={(e) => (e.isActive ? "text-red-400" : "")}
        >
          Service
        </NavLink>
      </div>
      <MdOutlineMenu
        className={`text-2xl sm:hidden ${menu ? "hidden" : "block"}`}
        onClick={() => setmenu(true)}
      />
    </div>
  );
}

export default Nav;
