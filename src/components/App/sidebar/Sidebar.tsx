// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const SidebarContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
//   width: 250px;
//   height: 100%;
//   background-color: #111;
//   transition: 0.3s;
//   z-index: 1000;
// `;

// const SidebarLink = styled(Link)`
//   display: block;
//   padding: 16px;
//   color: #fff;
//   text-decoration: none;
//   &:hover {
//     background-color: #575757;
//   }
// `;

// const Sidebar = ({ isOpen, toggle }) => {
//   return (
//     <SidebarContainer isOpen={isOpen}>
//       <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
//       <SidebarLink to="/about" onClick={toggle}>About</SidebarLink>
//       <SidebarLink to="/contact" onClick={toggle}>Contact</SidebarLink>
//     </SidebarContainer>
//   );
// };

// export default Sidebar;

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
      <section className="sidebar-btn">
        <Button />
      </section>

      <Link to="#" className="sidebar">
        <MdOutlineCancel
          role="button"
          onClick={() => handleIsClicked("sidebarSelected")}
          className="btnClose"
        />
      </Link>
    </div>
  );
};

export default Sidebar;
