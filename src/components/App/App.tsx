import { Routes, Route } from "react-router-dom";
import Error from "./error/Error";
import Footer from "./Footer";
import Home from "../home/Home";
import "./App.css";
import Contact from "./contact/Contact";
import { lazy, Suspense } from "react";
import FoodOrder from "../orders/FoodOrder";

//Lazy Loading
// const Foods = lazy(() => import("../foods/Foods"));

const Cart = lazy(() => import("../cart/Cart"));

const App = () => {
  return (
    <main className="App">
      <section className="main">
        <div className="routes">
          <Routes>
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
