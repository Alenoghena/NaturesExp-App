import { useRef } from "react";
import { MdCheck } from "react-icons/md";
import {
  useStateContext,
  fudType,
  initialStateType,
  fudInType,
} from "../../contexts/ContextProvider";
import Header from "../App/header/Header";
import { MdMoveDown } from "react-icons/md";
import Foods from "../foods/Foods";
import "./Home.css";

type HomeProps = {
  menuItems: fudInType[][];
  foodList: fudType[];
  isClicked: initialStateType;
};

const Home = () => {
  const { foodList }: HomeProps = useStateContext();

  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log(foodList);
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
          {foodList.slice(0, 12).map((item) => {
            return (
              <li key={item.id} className="liApp">
                <span className="check">
                  <MdCheck />
                </span>
                <span> {item.name}</span>
                <span className="quantItem">{item.quantity}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div ref={sectionRef} className="foodList">
        <Foods />
      </div>
    </div>
  );
};

export default Home;
