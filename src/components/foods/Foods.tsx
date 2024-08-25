import React from "react";
import "./Foods.css";
import { FaLongArrowAltLeft, FaSearch } from "react-icons/fa";
// import FoodItems from "../orders/FoodOrder";
import { Link } from "react-router-dom";
import {
  foodArrType,
  fudInType,
  initialStateType,
  useStateContext,
} from "../../contexts/ContextProvider";

type FoodsProps = {
  menuItems: fudInType[][];
  foodItems: foodArrType;
  isClicked: initialStateType;
  handleSelectObj: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  searchTerm: string;
  setSearchTerm: (value: React.SetStateAction<string>) => void;
};

const Foods = () => {
  const { foodItems, searchTerm, setSearchTerm, handleSelectObj }: FoodsProps =
    useStateContext();
  console.log(foodItems);
  return (
    <div className="foods">
      <div className="foods__form">
        <h2>Choose From Our Item List</h2>

        <form className="search">
          <label>Search:</label>
          &nbsp;
          <input
            type="search"
            value={searchTerm}
            placeholder="Search for item"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="searchInput"
          />
          <FaSearch className="searchSvg" />
        </form>
      </div>

      <ul className="ulFoods">
        {foodItems.map((item) => {
          //Show here if not selected.

          return (
            //Displays List of items

            <li
              className="liFoods"
              data-id={item.id}
              onClick={(event) => handleSelectObj(event)}
              key={item.id}
            >
              <Link to="/orders">
                <img
                  className="foodImg"
                  src={require(`../../images/${item.image}`)}
                  alt={item.name}
                />
              </Link>

              <div className="foodItem">
                <span className="foodName">Buy {item.name}</span>
                <span className="foodPrice">Price: ${item.price}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Foods;

{
  /* {!isClicked.componentSelected && (
        <nav className="home">
          <Link to="/">
            <FaLongArrowAltLeft />
          </Link>
        </nav>
      )} */
}
