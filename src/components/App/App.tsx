import { Routes, Route } from "react-router-dom";
import Error from "./error/Error";
import Footer from "./Footer";
import Home from "../home/Home";
import "./App.css";
import Contacts from "./contacts/Contacts";
import Sidebar from "./sidebar/Sidebar";
import { lazy, Suspense } from "react";
// import Foods from "../foods/Foods";
import {
  useStateContext,
  fudInType,
  initialStateType,
} from "../../contexts/ContextProvider";
import FoodOrder from "../orders/FoodOrder";

//Lazy Loading
// const Foods = lazy(() => import("../foods/Foods"));

const Cart = lazy(() => import("../cart/Cart"));

type AppProps = {
  isClicked: initialStateType;
  handleIsClicked: (clicked: string) => void;
};

const App = () => {
  const { isClicked }: AppProps = useStateContext();

  return (
    <main className="App">
      <section className="main">
        {isClicked.sidebarSelected && (
          <section className="sidebarContainer">
            <Sidebar />
          </section>
        )}
        <div className="routes">
          <Routes>
            {/* dashboard  */}
            <Route path="/" element={<Home />} />

            <Route path="/contacts" element={<Contacts />} />
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
