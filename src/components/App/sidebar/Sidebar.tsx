import { MdOutlineCancel } from "react-icons/md";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import {
  useStateContext,
  initialStateType,
} from "../../../contexts/ContextProvider";
import "./Sidebar.css";

type SidebarProps = {
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};

const Sidebar = () => {
  const { handleIsClicked, isClicked }: SidebarProps = useStateContext();
  return (
    <div
      className={
        isClicked.sidebarSelected ? "btnContainer active" : "btnContainer"
      }
    >
      <Link to="#" className="sidebar">
        <MdOutlineCancel
          role="button"
          onClick={() => handleIsClicked("sidebarSelected")}
          className="btnClose"
        />
      </Link>
      <section className="sidebar-btn">
        <Button />
      </section>
    </div>
  );
};

export default Sidebar;
