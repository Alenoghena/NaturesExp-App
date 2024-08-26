import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import Sidebar from "../sidebar/Sidebar";
import {
  initialStateType,
  useStateContext,
} from "../../../contexts/ContextProvider";
import "./Header.css";

type HeaderProps = {
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};
const Header = () => {
  const { isClicked, handleIsClicked }: HeaderProps = useStateContext();

  return (
    <div className="headerContainer">
      <nav className="nav">
        <section className="links">
          <Link to="/contacts" className="contactsLink">
            <span>Contact</span>
          </Link>

          <Link to="/cart" className="cartLink">
            <span>Checkout</span>
          </Link>
          <section className=" settingsbtn">
            <span>Settings</span>
          </section>
        </section>
      </nav>
      {isClicked.sidebarSelected && (
        <section className="sidebarContainer">
          <Sidebar />
        </section>
      )}
      <div className="headerBtn">
        {!isClicked.sidebarSelected && (
          <MdMenu
            className=" outlineMenu"
            onClick={() => handleIsClicked("sidebarSelected")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;

// import { AiOutlineMenu } from "react-icons/ai";
// import { IoReorderFour } from "react-icons/io5";
// import { AiOutlineUnorderedList } from "react-icons/ai";
// import { ReactNode } from "react";
// <FaShoppingBasket /> for food
//<FaShoppingCart />  for cart
// <FiSettings />
// <FaAddressCard />

/* <NavButton
            title="Menu"
            customFunc={handleActiveMenu}
            color="red"
            icon={}
          />  for outlinemenu*/

// const handleActiveMenu = () => {
//   handleIsClicked("sidebarSelected");
// };

// type NavButtonProps = {
//   title?: string;
//   customFunc: () => void;
//   icon: ReactNode;
//   color?: string;
//   dotColor?: string;
// };
// const NavButton = ({ customFunc, icon, color, dotColor }: NavButtonProps) => (
//   <div>
//     <button type="button" onClick={() => customFunc()} style={{ color }}>
//       <span style={{ background: dotColor }}>{icon}</span>
//     </button>
//   </div>
// );

{
  /* <h3 className="title">Online African Food Shop</h3> */
}

{
  /* {isClicked.pageSelected && (
            <Link to="/foods" className="foodsLink">
              <span>Products</span>
            </Link>
          )} */
}

{
  /* <header className="header">
          <h4 className="subTitle">
            {isClicked.pageSelected
              ? "Menu Availability"
              : "Menu List Availability"}
          </h4>
        </header> */
}
