import Hamburger from "../icons/Hamburger";
import Logo from "../icons/Logo";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="bg-black text-white px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="px-3 py-2 rounded-xl shadow-[0_0_15px_rgba(252,214,255,0.7)] ">
          <Logo />
        </div>

        <div className="sm:hidden">
          <Hamburger />
        </div>
        <div className="sm:flex gap-8 items-center hidden">
          <nav className="flex gap-8 items-center">
            <a href="#" className="hover:text-neutral-400 font-medium">Home</a>
            <a href="#" className="hover:text-neutral-400 font-medium">About</a>
            <a href="#" className="hover:text-neutral-400 font-medium">Service</a>
            <a href="#" className="hover:text-neutral-400 font-medium">Contact Us</a>
          </nav>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
