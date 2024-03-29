import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaShopify } from "react-icons/fa6";

import "./index.css";

const Header = () => (
  <nav className="header-container">
    <div className="responsive-container">
      <button className="heading-button">
        <h1>Shop Bee </h1>
        <FaShopify className="company-icon" />
      </button>
      <div className="icon-container">
        <button>
          <IoSearch className="icon" />
        </button>
        <button>
          <CgProfile className="icon" />
        </button>
        <button>
          <MdFavoriteBorder className="icon" />
        </button>
        <button>
          <IoCartOutline className="icon" />
        </button>
      </div>
    </div>
  </nav>
);

export default Header;
