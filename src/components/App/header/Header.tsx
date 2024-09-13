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
          <Link to="/contact" className="contactsLink">
            <span>Contact</span>
          </Link>

          <Link to="/cart" className="cartLink">
            <span>Checkout</span>
          </Link>
          <section className=" settingsbtn">
            <span>
              <a href="#">Settings</a>
            </span>
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
            className=" menu"
            onClick={() => handleIsClicked("sidebarSelected")}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
