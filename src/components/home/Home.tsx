import { useRef, lazy, Suspense } from "react";
import { MdCheck } from "react-icons/md";
import { useStateContext, HomeInType } from "../../contexts/ContextProvider";
import Header from "../App/header/Header";
import { MdMoveDown } from "react-icons/md";
import "./Home.css";

//Lazy Loading
const Foods = lazy(() => import("../foods/Foods"));

type HomeProps = {
  listArRef: React.MutableRefObject<HomeInType[][]>;
};

const Home = () => {
  const { listArRef }: HomeProps = useStateContext();

  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="farmContainer">
        <header className="App__header">
          <Header />
        </header>
        <h1>Organic Farm</h1>
        <div className="farmContent">
          We Are Growers
          <br />
          <span>And Purveyors of Finest </span>
          <br />
          <span>Breeds of Organic Food</span>
        </div>
        <img
          src={require("../../img/grapes.jpg")}
          alt="farm"
          className="farmImg"
        />
        <div className="scrollDown" onClick={scrollToSection}>
          <MdMoveDown />
          <span className="scrollText">Scroll down</span>
        </div>
        <ul className="foodApp">
          <li className="liAppHeading">Check Availability List</li>
          {listArRef.current.map((food) => {
            return food.map((item) => {
              return (
                <li key={item.id} className="liApp">
                  <MdCheck className="check" />
                  <span className="quantName"> {item.name}</span>
                  <span className="quantItem">{item.quantity}</span>
                </li>
              );
            });
          })}
        </ul>
      </div>

      <div ref={sectionRef} className="foodList">
        <Suspense fallback={<div>Foods detail loading...</div>}>
          <Foods />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
