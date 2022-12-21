import { Link } from "react-router-dom";
import { menuItems } from "../../../data/menuItems";

const NavMenu = () => {
  return (
    <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
      {menuItems.map((item, idx) => (
        <li
          className="text-sage-green hover:underline "
          key={`header nav ${idx}`}
        >
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
