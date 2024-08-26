import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Error from "./error/Error";
import Footer from "./Footer";
import Home from "../home/Home";
import "./App.css";
import Contact from "./contact/Contact";
import Sidebar from "./sidebar/Sidebar";
import { lazy, Suspense } from "react";
// import Foods from "../foods/Foods";
import {
  useStateContext,
  fudInType,
  initialStateType,
} from "../../contexts/ContextProvider";
import FoodOrder from "../orders/FoodOrder";
import styled from "styled-components";

//Lazy Loading
// const Foods = lazy(() => import("../foods/Foods"));

const Cart = lazy(() => import("../cart/Cart"));

type AppProps = {
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};

// const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.5);
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
//   z-index: 999;
// `;

const App = () => {
  const { isClicked }: AppProps = useStateContext();

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="App">
      <section className="main">
        <div className="routes">
          {/* {isClicked.sidebarSelected && (
            <section className="sidebarContainer">
              <Sidebar />
            </section>
          )} */}
          <Routes>
            {/* <button onClick={toggleSidebar}>Toggle Sidebar</button> */}
            {/* <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
        <Overlay isOpen={isOpen} onClick={toggleSidebar} />  */}

            {/* dashboard  */}
            <Route path="/" element={<Home />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/orders" element={<FoodOrder />} />
            {/* <Route path="/foodNav" element={<FoodNav />} /> */}

            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Cart detail loading...</div>}>
                  <Cart />
                </Suspense>
              }
            />
            <Route path="/error" element={<Error />} />
          </Routes>
        </div>
      </section>

      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};
export default App;

{
  /* <Route
              path="/foods"
              element={
                <Suspense fallback={<div>Food detail loading...</div>}>
                  <Foods />
                </Suspense>
              }
            /> */
}
